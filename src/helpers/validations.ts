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

// user

const imageSchema = z.object({
  type: z
    .string()
    .regex(/^image\/(jpeg|jpg|png|gif|bmp|tiff|webp)$/, { message: "Invalid image type" }),
  size: z.number().min(0),
});

export const addUserSchema = z
  .object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={[}\]|:;"'<>,.?/~`])[A-Za-z\d!@#$%^&*()_\-+={[}\]|:;"'<>,.?/~`]{8,}$/,
        {
          message:
            "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.",
        },
      ),
    confirmPassword: z.string().min(1, { message: "Pkease confirm your password" }),
    profileImage: imageSchema.optional(),
    firstName: z.string().min(1, { message: "First Name is required" }),
    middleName: z
      .string()
      .min(1, { message: "Middle Name is required" })
      .max(2, { message: "Middle Name must be at most 2 characters long" })
      .toUpperCase()
      .optional(),
    lastName: z.string().min(1, { message: "Last Name is required" }),
    suffix: z.string().optional(),
    role: z.enum(["mentor", "dean", "admin"], {
      message: "Please select a role for this user",
    }),
    department: z.any().refine((data) => data !== null, {
      message: "Please select a department for this user",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const updatePasswordSchema = z
  .object({
    password: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={[}\]|:;"'<>,.?/~`])[A-Za-z\d!@#$%^&*()_\-+={[}\]|:;"'<>,.?/~`]{8,}$/,
        {
          message:
            "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.",
        },
      ),
    newPassword: z
      .string()
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={[}\]|:;"'<>,.?/~`])[A-Za-z\d!@#$%^&*()_\-+={[}\]|:;"'<>,.?/~`]{8,}$/,
        {
          message:
            "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.",
        },
      ),
    confirmPassword: z.string().min(1, { message: "Pkease confirm your password" }),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
