import {
  useInfiniteQuery,
  QueryFunction,
  InfiniteData,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";
import api from "@/config/axios";
import { IGetUsersQueryParams, IPaginatedUsers, IRequestError, IResponse } from "@/types";

type TMutationResponse = IResponse<IPaginatedUsers>;

const getUsers: QueryFunction<IPaginatedUsers, [string, IGetUsersQueryParams], number> = async ({
  pageParam,
  queryKey,
}) => {
  const { department, filterBy, keyword, limit, role } = queryKey[1];

  const response = await api.get<TMutationResponse>(
    `/api/users?keyword=${keyword}&page=${pageParam}&limit=${limit}&filterBy=${filterBy}&role=${role}&department=${department}`,
  );

  return response.data.data;
};

const useGetUsers = (
  params: IGetUsersQueryParams,
): UseInfiniteQueryResult<InfiniteData<IPaginatedUsers>, IRequestError> => {
  return useInfiniteQuery({
    queryKey: ["users", params],
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      return lastPage.pagination.nextPage;
    },
    queryFn: getUsers,
  });
};

export default useGetUsers;
