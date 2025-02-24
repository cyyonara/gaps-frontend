import { useQuery, QueryFunction, UseQueryResult } from "@tanstack/react-query";
import api from "@/config/axios";
import { IGetUsersQueryParams, IPaginatedUsers, IRequestError, IResponse } from "@/types";

type TMutationResponse = IResponse<IPaginatedUsers>;

const getUsers: QueryFunction<IPaginatedUsers, [string, IGetUsersQueryParams]> = async ({
  queryKey,
}) => {
  const { search, page, limit } = queryKey[1];
  const response = await api.get<TMutationResponse>(
    `/api/users?search=${search}&page=${page}&limit=${limit}`,
  );

  return response.data.data;
};

const useGetUsers = (
  params: IGetUsersQueryParams,
): UseQueryResult<IPaginatedUsers, IRequestError> => {
  return useQuery({
    queryKey: ["users", params],
    queryFn: getUsers,
    placeholderData: (previousData) => previousData,
  });
};

export default useGetUsers;
