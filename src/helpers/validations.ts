import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export const mentorSchema = z.object({
  mentor: z.string().min(1, { message: "Please assign a mentor" }),
  date: z.date().refine((date) => date instanceof Date && !isNaN(date.getTime()), {
    message: "Please select a valid date",
  }),
});

export const editAssessmentSchema = z.object({
  title: z.string().min(1, { message: "Please enter a valid assessment title" }),
  description: z.string().optional(),
});
