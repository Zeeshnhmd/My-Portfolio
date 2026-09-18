import { Resend } from "resend";
import { person } from "@/content/portfolio";
import type { ContactFormValues } from "@/lib/contact-schema";

type SendResult = { delivered: boolean };

export async function sendContactEmail(values: ContactFormValues): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.RESEND_TO_EMAIL || person.email;

  if (!apiKey || !from) {

    console.info("[contact] Resend is not configured; skipping email send.", {
      name: values.name,
      email: values.email,
    });
    return { delivered: false };
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to,
    replyTo: values.email,
    subject: `New message from ${values.name}`,
    text: [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.company ? `Company: ${values.company}` : null,
      "",
      "What are they building?",
      values.project,
      "",
      "Message:",
      values.message,
    ]
      .filter((line) => line !== null)
      .join("\n"),
  });

  return { delivered: true };
}
