import { axios } from "@/configs";
import { SEARCH_FONT_QUERY_KEY } from "@/constants";
import { BaseQueryParams, PaginationInterface, ResponseType } from "@/types";
import { FontInterface } from "../types";
import { infiniteQueryOptions, useInfiniteQuery } from "@tanstack/react-query";

const pageSize = 10;

const searchFont = async ({
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
  >("/font/search", {
    params: {
      ...query,
      offset: pageParam,
      limit: query?.limit || pageSize,
      search: query?.search,
    },
  });

  return response?.data?.data;
};

export const searchFontQueryOptions = (query?: BaseQueryParams) => {
  return infiniteQueryOptions({
    queryKey: [SEARCH_FONT_QUERY_KEY, query],
    initialPageParam: 0,
    queryFn: ({ pageParam = 0 }) => searchFont({ pageParam, query }),
    getNextPageParam: (lastPage) =>
      lastPage?.pagination?.offset + lastPage?.pagination?.limit >=
      lastPage?.pagination?.count
        ? undefined
        : lastPage?.pagination?.offset + lastPage?.pagination?.limit,
  });
};

export function useSearchFont(query?: BaseQueryParams) {
  return useInfiniteQuery({
    ...searchFontQueryOptions(query),
  });
}
