import { QueryFunction, useQuery, UseQueryResult } from "@tanstack/react-query";
import { IPaginatedDepartments, IResponse, IRequestError, IGetDepartmentsParams } from "@/types";
import api from "@/config/axios";

type TQueryResponse = IResponse<IPaginatedDepartments>;

const getDepartments: QueryFunction<
  IPaginatedDepartments,
  [string, IGetDepartmentsParams]
> = async ({ queryKey }) => {
  const { search, page = 1, limit, sortBy } = queryKey[1];
  const response = await api.get<TQueryResponse>(
    `/api/departments?search=${search}&page=${page}&limit=${limit}&sortBy=${sortBy}`,
  );
  return response.data.data;
};

const useGetDepartments = ({
  search,
  page,
  limit,
  sortBy,
}: IGetDepartmentsParams): UseQueryResult<IPaginatedDepartments, IRequestError> => {
  return useQuery({
    queryKey: ["departments", { search, page, limit, sortBy }],
    queryFn: getDepartments,
    placeholderData: (previousData) => previousData,
  });
};

export default useGetDepartments;
