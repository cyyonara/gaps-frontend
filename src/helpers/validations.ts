import { z } from "zod";

// auth

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
});

// department

export const addDepartmentSchema = z.object({
  name: z.string().min(5, { message: "Please enter atleast 5 characters for department name" }),
  dean: z.any(),
});

// course
export const addCourseSchema = z.object({
  name: z.string().min(5, { message: "Please enter atleast 5 characters for course name" }),
  department: z.any().refine((data) => data !== null, {
    message: "Please select which department this course will belong",
  }),
});

// assessment

export const addAssessmentSchema = z.object({
  title: z.string().min(1, { message: "Please enter atleast 5 characters for assessment title" }),
  description: z.string().optional(),
  course: z.any().refine((data) => data !== null, {
    message: "Please select which course this assessment will belong",
  }),
});

export const editAssessmentSchema = z.object({
  title: z.string().min(1, { message: "Please enter a valid assessment title" }),
  description: z.string().optional(),
});

export const addQuestionSchema = z.object({
  question: z.string().min(1, { message: "Please enter atleast 5 characters for your question" }),
  options: z
    .array(
      z.object({
        label: z.string().min(1, { message: "Field 'option' is required" }),
        isCorrectAnswer: z.boolean(),
      }),
    )
    .min(2, { message: "Please provide atleast 2 options for this question" })
    .refine(
      (data) => {
        const correctOption = data.some((option) => option.isCorrectAnswer);
        return !!correctOption;
      },
      { message: "Please select 1 correct option" },
    )
    .refine(
      (data) => {
        const correctOptions = data.filter((option) => option.isCorrectAnswer);
        return correctOptions.length === 1;
      },
      { message: "Only one correct option is allowed" },
    ),
});

export const mentorSchema = z.object({
  mentor: z.string().min(1, { message: "Please assign a mentor" }),
  date: z.date().refine((date) => date instanceof Date && !isNaN(date.getTime()), {
    message: "Please select a valid date",
  }),
});
