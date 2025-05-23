import { axios } from "@/configs";
import { GET_FONT_LIST_QUERY_KEY } from "@/constants";
import { BaseQueryParams, PaginationInterface, ResponseType } from "@/types";
import { FontInterface } from "../types";
import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";

const pageSize = 24;

const getFontList = async ({
  pageParam = 0,
  query,
}: {
  pageParam?: number;
  query?: BaseQueryParams;
}): Promise<{
  data: FontInterface[];
  pagination: PaginationInterface;
}> => {
  const response = await axios.get<
    ResponseType<{ data: FontInterface[]; pagination: PaginationInterface }>
  >("/font", {
    params: {
      ...query,
      offset: pageParam,
      limit: query?.limit || pageSize,
      fontType: query?.fontType || [],
      fontWeight: query?.fontWeight || 1,
      license: query?.license || [],
    },
  });

  return response?.data?.data;
};

export const getFontListQueryOptions = (query?: BaseQueryParams) => {
  return infiniteQueryOptions({
    queryKey: [GET_FONT_LIST_QUERY_KEY, query],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => getFontList({ pageParam, query }),
    getNextPageParam: (lastPage) =>
      lastPage?.pagination?.offset + lastPage?.pagination?.limit >=
      lastPage?.pagination?.count
        ? undefined
        : lastPage?.pagination?.offset + lastPage?.pagination?.limit,
  });
};

export function useGetFontList(query?: BaseQueryParams) {
  return useInfiniteQuery({
    ...getFontListQueryOptions(query),
  });
}
