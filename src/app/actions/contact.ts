"use server";

import { headers } from "next/headers";
import { contactFormSchema } from "@/lib/contact-schema";
import { sendContactEmail } from "@/lib/mailer";
import { isRateLimited } from "@/lib/rate-limit";

export type ContactActionState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "not_configured" }
  | { status: "error"; message: string; fieldErrors?: Record<string, string> };

export async function submitContactForm(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  // Honeypot: real visitors never see or fill this field. Bots that fill
  // every field get a fake success instead of a hint that they were caught.
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success" };
  }

  const headerList = await headers();
  const ip = headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many submissions. Please try again in a minute.",
    };
  }

  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    project: formData.get("project"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !fieldErrors[key]) {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors,
    };
  }

  try {
    const result = await sendContactEmail(parsed.data);
    return result.delivered ? { status: "success" } : { status: "not_configured" };
  } catch (error) {
    console.error("[contact] Failed to send email", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email me directly instead.",
    };
  }
}
