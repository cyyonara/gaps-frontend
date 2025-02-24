import { z } from "zod";
import { AxiosError } from "axios";

// API
interface IResponse<T> {
  success: boolean;
  data: T;
  message: string;
  statusCode: number;
}

interface IRequestError extends AxiosError<{ message: string }> {}

// AUTH
interface ILoginFields {
  email: string;
  password: string;
}

// DEPARTMENT
interface IAddDepartmentFormValues {
  name: string;
  dean: any;
}

interface IDepartment {
  _id: string;
  name: string;
  dean: Omit<IUser, "department"> | null;
}

interface IDepartmentWithAudit extends IDepartment, IAuditFields {
  courseCount: number;
}

interface IPaginatedDepartments extends IPagination {
  departments: IDepartmentWithAudit[];
}

interface IGetDepartmentsParams {
  search: string;
  page: number;
  limit: number;
  sortBy: string;
}

// COURSE
interface IAddCourseFormValues {
  name: string;
  department: any;
}

interface ICourse {
  _id: string;
  name: string;
  department: {
    _id: string;
    name: string;
  };
}

interface ICourseWithAudit extends ICourse, IAuditFields {
  assessmentCount: number;
}

interface IPaginatedCourses extends IPagination {
  courses: ICourseWithAudit[];
}

interface IGetCoursesParams {
  search: string;
  page: number;
  limit: number;
  sortBy: string;
}

// ASSESSMENTS
interface IAddAssessmentFormValues {
  title: string;
  description: string;
  course: any;
}

interface IAssessmentDetails {
  title: string;
  description: string;
  course: ICourseWithAudit;
}

interface IQuestion {
  question: string;
  options: {
    label: string;
    isCorrectAnswer: boolean;
  }[];
}

interface IAddQuestionFormValues {
  question: string;
  options: {
    label: string;
    isCorrectAnswer: boolean;
  }[];
}

// USER
type TUserRole = "mentor" | "dean" | "admin";

interface IUser {
  _id: string;
  email: string;
  profileImage: string | null;
  firstName: string;
  middleName: string | null;
  lastName: string;
  fullname: string;
  suffix: string | null;
  role: TUserRole;
  department: {
    _id: string;
    name: string;
  };
}

interface IUserWithAudit extends IUser, IAuditFields {}

interface IPaginatedUsers extends IPagination {
  users: IUserWithAudit[];
}

interface IGetUsersQueryParams {
  keyword?: string;
  limit?: number;
  filterBy?: "none" | "department" | "role";
  department?: string;
  role?: TUserRole;
}

// AUDIT FIELDS
interface IAuditFields {
  createdAt: Date;
  updatedAt: Date;

  createdBy: IUser | null;
  updatedBy: IUser | null;
}

// PAGINATION
interface IPagination {
  pagination: {
    currentPage: number;
    pageSize: number;
    nextPage: number | null;
    previousPage: number | null;
    totalPages: number;
    totalItems: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}
