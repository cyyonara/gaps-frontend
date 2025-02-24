import { QueryFunction, UseQueryResult, useQuery } from "@tanstack/react-query";
import { IPaginatedCourses, IResponse, IRequestError, IGetCoursesParams } from "@/types";
import api from "@/config/axios";

type TQueryResponse = IResponse<IPaginatedCourses>;

const getCourses: QueryFunction<IPaginatedCourses, [string, IGetCoursesParams], number> = async ({
  queryKey,
}) => {
  const { search, page, limit, sortBy } = queryKey[1];
  const response = await api.get<TQueryResponse>(
    `/api/courses?search=${search}&page=${page}&limit=${limit}&sortBy=${sortBy}`,
  );
  return response.data.data;
};

const useGetCourses = ({
  search,
  page,
  limit,
  sortBy,
}: IGetCoursesParams): UseQueryResult<IPaginatedCourses, IRequestError> => {
  return useQuery({
    queryKey: ["courses", { search, page, limit, sortBy }],
    queryFn: getCourses,
    placeholderData: (previousData) => previousData,
  });
};

export default useGetCourses;
