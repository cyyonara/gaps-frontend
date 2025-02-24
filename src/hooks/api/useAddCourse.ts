import { useMutation, MutationFunction, UseMutationResult } from "@tanstack/react-query";
import { IAddCourseFormValues, ICourseWithAudit, IRequestError, IResponse } from "@/types";
import api from "@/config/axios";

type TMutationResponse = IResponse<ICourseWithAudit>;

const addCourse: MutationFunction<ICourseWithAudit, IAddCourseFormValues> = async (
  courseFields,
) => {
  const response = await api.post<TMutationResponse>("/api/courses", courseFields);
  return response.data.data;
};

const useAddCourse = (): UseMutationResult<
  ICourseWithAudit,
  IRequestError,
  IAddCourseFormValues
> => {
  return useMutation({
    mutationKey: ["add-course"],
    mutationFn: addCourse,
  });
};

export default useAddCourse;
