"use client";

import { useTranslation } from "react-i18next";
import { FontInterface } from "../../types";
import {
  ActionSection,
  FontDetailInfoContainer,
  FontInfoBlock,
  FontInfoItem,
  FontInfoItemKey,
  FontInfoItemValue,
  FontInfoSection,
  FontTitle,
} from "./styles";
import { ActionButton } from "@/styles";
import { openNewTab } from "@/utils";
import { getFontTypeLocales } from "@/locales";
import { useEffect } from "react";

type FontDetailInfoProps = {
  font: FontInterface;
};

export function FontDetailInfo({ font }: FontDetailInfoProps) {
  const { t } = useTranslation();

  const match = font?.font_face?.match(/font-family:\s*['"]?([^;'"]+)['"]?;/);
  const fontFamily = match?.[1];

  useEffect(() => {
    const styleId = `font-${font?.id}`;
    if (document.getElementById(styleId)) return;
    const fontFaceText = font?.font_face?.replace(/\\n/g, "\n");
    const importMatch = fontFaceText?.match(
      /@import\s+url\(['"]?(.+?)['"]?\);?/
    );
    if (importMatch) {
      const link = document.createElement("link");
      link.id = styleId;
      link.rel = "stylesheet";
      link.href = importMatch[1];
      document.head.appendChild(link);
      return;
    }
    if (fontFaceText?.includes("@font-face")) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerText = fontFaceText;
      document.head.appendChild(style);
    }
  }, [font]);

  return (
    <FontDetailInfoContainer>
      <FontInfoSection $fontFamily={fontFamily}>
        <FontTitle>{font?.title}</FontTitle>
        <FontInfoBlock>
          <FontInfoItem>
            <FontInfoItemKey>{t("제작")}</FontInfoItemKey>
            <FontInfoItemValue>{font?.author}</FontInfoItemValue>
          </FontInfoItem>
          <FontInfoItem>
            <FontInfoItemKey>{t("형태")}</FontInfoItemKey>
            <FontInfoItemValue>
              {getFontTypeLocales(font?.type)}
            </FontInfoItemValue>
          </FontInfoItem>
          <FontInfoItem>
            <FontInfoItemKey>{t("굵기")}</FontInfoItemKey>
            <FontInfoItemValue>
              {t("{{value}}가지", { value: font?.font_weight })}
            </FontInfoItemValue>
          </FontInfoItem>
          <FontInfoItem>
            <FontInfoItemKey>{t("조회수")}</FontInfoItemKey>
            <FontInfoItemValue>
              {font?.view?.toLocaleString()}
            </FontInfoItemValue>
          </FontInfoItem>
        </FontInfoBlock>
      </FontInfoSection>
      <ActionSection>
        <ActionButton onClick={() => openNewTab(font?.download_url)}>
          {t("다운로드 페이지로 이동")}
        </ActionButton>
      </ActionSection>
    </FontDetailInfoContainer>
  );
}
