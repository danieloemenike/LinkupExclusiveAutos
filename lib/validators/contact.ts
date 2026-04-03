import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name too long"),

  phone: z
    .string()
    .regex(/^(\+?234|0)[789]\d{9}$/, "Enter a valid Nigerian phone number"),

  email: z
    .string()
    .email("Enter a valid email address")
    .optional()
    .or(z.literal("")),

  service: z.enum([
    "panel-beating",
    "oven-bake-painting",
    "car-buffing",
    "car-wash",
    "car-accessories",
    "car-upgrades",
    "other",
  ]),

  carDetails: z
    .string()
    .min(3, "Please enter your car make and model")
    .max(100),

  message: z
    .string()
    .max(500, "Message too long (max 500 characters)")
    .optional()
    .or(z.literal("")),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
