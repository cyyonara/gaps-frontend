import { useMutation, MutationFunction, UseMutationResult } from "@tanstack/react-query";
import { IResponse, IRequestError, IUser, ILoginFields } from "@/types";
import api from "@/config/axios";

type TMutationResponse = IResponse<IUser>;

const login: MutationFunction<IUser, ILoginFields> = async (loginFields) => {
  const response = await api.post<TMutationResponse>("/api/auth/login", loginFields);
  return response.data.data;
};

const useLogin = (): UseMutationResult<IUser, IRequestError, ILoginFields> => {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });
};

export default useLogin;
