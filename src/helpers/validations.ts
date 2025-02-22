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

export const addUserSchema = z.object({
  name: z.string().min(1, { message: "Please enter your full name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  department: z.string().min(1, { message: "Please select a department" }),
  userType: z.string().min(1, { message: "Please select a user type" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Confirm password must be at least 8 characters long" }),
});

export const addDepartmentSchema = z.object({
  name: z.string().min(1, { message: "Please enter a department name" }),
  description: z.string().optional(),
  dean: z.string().optional(),
});
