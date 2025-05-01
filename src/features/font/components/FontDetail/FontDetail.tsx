"use client";

import { Spinner } from "@/components";
import { useGetFontDetail } from "../../api";
import {
  FontDetailContainer,
  FontDetailContent,
  FontDetailContentBlock,
} from "./styles";
import { notFound } from "next/navigation";
import { FontDetailInfo } from "../FontDetailInfo";
import { FontPreview } from "../FontPreview";
import { WebFont } from "../WebFont";
import { FontLicenseContent } from "../FontLicenseContent";
import { FontLicenseCategory } from "../FontLicenseCategory";

type FontDetailProps = {
  fontId: number;
};

export function FontDetail({ fontId }: FontDetailProps) {
  const { data, isLoading } = useGetFontDetail(fontId);

  if (isLoading) {
    return <Spinner />;
  } else if (!data) {
    notFound();
  }

  return (
    <FontDetailContainer>
      <FontDetailInfo font={data} />
      <FontDetailContent>
        <FontDetailContentBlock $width="calc(65% - 24px)">
          <FontPreview font={data} />
          <FontLicenseContent font={data} />
          <FontLicenseCategory font={data} />
        </FontDetailContentBlock>
        <FontDetailContentBlock $width="calc(35% - 24px)">
          <WebFont font={data} />
        </FontDetailContentBlock>
      </FontDetailContent>
    </FontDetailContainer>
  );
}
