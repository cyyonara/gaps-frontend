import { useMutation, MutationFunction, UseMutationResult } from "@tanstack/react-query";
import { IUserWithAudit, IRequestError, IResponse, IUpdatePasswordValues } from "@/types";
import api from "@/config/axios";

type TMutationResponse = IResponse<IUserWithAudit>;

const updatePassword: MutationFunction<IUserWithAudit, IUpdatePasswordValues> = async (
  userFields,
) => {
  const response = await api.post<TMutationResponse>("/api/profile/updatePassword", userFields);
  return response.data.data;
};

const useUpdatePassword = (): UseMutationResult<
  IUserWithAudit,
  IRequestError,
  IUpdatePasswordValues
> => {
  return useMutation({
    mutationKey: ["update-password"],
    mutationFn: updatePassword,
  });
};

export default useUpdatePassword;
