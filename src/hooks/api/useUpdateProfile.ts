import { useMutation, MutationFunction, UseMutationResult } from "@tanstack/react-query";
import { IUserWithAudit, IRequestError, IResponse, IUpdateFormValues } from "@/types";
import api from "@/config/axios";

type TMutationResponse = IResponse<IUserWithAudit>;

const updateProfile: MutationFunction<IUserWithAudit, IUpdateFormValues> = async (userFields) => {
  const response = await api.post<TMutationResponse>("/api/profile/updateProfile", userFields);
  return response.data.data;
};

const useUpdateProfile = (): UseMutationResult<
  IUserWithAudit,
  IRequestError,
  IUpdateFormValues
> => {
  return useMutation({
    mutationKey: ["update-profile"],
    mutationFn: updateProfile,
  });
};

export default useUpdateProfile;
