import { useMutation, MutationFunction, UseMutationResult } from "@tanstack/react-query";
import { IAddDepartmentFormValues, IDepartmentWithAudit, IRequestError, IResponse } from "@/types";
import api from "@/config/axios";

type TMutationResponse = IResponse<IDepartmentWithAudit>;

const addDepartment: MutationFunction<IDepartmentWithAudit, IAddDepartmentFormValues> = async (
  departmentFields,
) => {
  const response = await api.post<TMutationResponse>("/api/departments", departmentFields);
  return response.data.data;
};

const useAddDepartment = (): UseMutationResult<
  IDepartmentWithAudit,
  IRequestError,
  IAddDepartmentFormValues
> => {
  return useMutation({
    mutationKey: ["add-department"],
    mutationFn: addDepartment,
  });
};

export default useAddDepartment;
