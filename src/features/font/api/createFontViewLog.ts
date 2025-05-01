import { axios } from "@/configs";
import { CREATE_FONT_VIEW_LOG_MUTATE_KEY } from "@/constants";
import { useMutation } from "@tanstack/react-query";
import { CreateFontViewLogDto } from "../types";

const createFontViewLog = async ({
  font_id,
  createFontViewLogDto,
}: {
  font_id?: string;
  createFontViewLogDto: CreateFontViewLogDto;
}) => {
  const response = await axios.post(
    `/log/font/${font_id}`,
    createFontViewLogDto
  );

  return response?.data?.data;
};

export function useCreateFontViewLog() {
  return useMutation({
    mutationKey: [CREATE_FONT_VIEW_LOG_MUTATE_KEY],
    mutationFn: ({
      font_id,
      createFontViewLogDto,
    }: {
      font_id?: string;
      createFontViewLogDto: CreateFontViewLogDto;
    }) =>
      createFontViewLog({
        font_id,
        createFontViewLogDto,
      }),
  });
}
