import { axios } from "@/configs";
import { GET_FONT_DETAIL_QUERY_KEY } from "@/constants";
import { ResponseType } from "@/types";
import { FontInterface } from "../types";
import { queryOptions, useQuery } from "@tanstack/react-query";

const getFontDetail = async ({
  fontId,
}: {
  fontId: number;
}): Promise<FontInterface> => {
  const response = await axios.get<ResponseType<FontInterface>>(
    `/font/${fontId}`
  );

  return response?.data?.data;
};

export const getFontDetailQueryOptions = (fontId: number) => {
  return queryOptions({
    queryKey: [GET_FONT_DETAIL_QUERY_KEY, fontId],
    queryFn: () => getFontDetail({ fontId }),
  });
};

export function useGetFontDetail(fontId: number) {
  return useQuery({
    ...getFontDetailQueryOptions(fontId),
  });
}
