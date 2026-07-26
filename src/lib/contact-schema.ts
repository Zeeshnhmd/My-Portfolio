import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(120),
  email: z.string().trim().min(1, "Please enter your work email.").email("Please enter a valid email address."),
  company: z.string().trim().max(160).optional().or(z.literal("")),
  project: z
    .string()
    .trim()
    .min(1, "Please share a little about what you're building.")
    .max(2000),
  message: z.string().trim().min(1, "Please add a message.").max(4000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
