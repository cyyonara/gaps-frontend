import { useMutation, MutationFunction, UseMutationResult } from "@tanstack/react-query";
import { IAddUserFormValues, IUserWithAudit, IRequestError, IResponse } from "@/types";
import api from "@/config/axios";

type TMutationResponse = IResponse<IUserWithAudit>;

const addUser: MutationFunction<IUserWithAudit, IAddUserFormValues> = async (userFields) => {
  const response = await api.post<TMutationResponse>("/api/users", userFields);
  return response.data.data;
};

const useAddUser = (): UseMutationResult<IUserWithAudit, IRequestError, IAddUserFormValues> => {
  return useMutation({
    mutationKey: ["add-user"],
    mutationFn: addUser,
  });
};

export default useAddUser;
