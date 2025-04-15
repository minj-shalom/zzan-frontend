"use client";

import { useTranslation } from "react-i18next";
import { FontInterface } from "../../types";
import {
  FontAuthor,
  FontCardBody,
  FontCardContainer,
  FontCardFooter,
  FontCardHeader,
  FontCardHeaderBlock,
  FontTitle,
  StyledInput,
  StyledRightOutlined,
} from "./styles";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

type FontCardProps = {
  data: FontInterface;
  fontSize: number;
};

export function FontCard({ data, fontSize }: FontCardProps) {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  const match = data?.font_face.match(/font-family:\s*['"]?([^;'"]+)['"]?;/);
  const fontFamily = match?.[1];

  const handleClick = () => {
    router.push(`/font/${data?.id}`);
  };

  useEffect(() => {
    const styleId = `font-${data.id}`;
    if (document.getElementById(styleId)) return;

    const fontFace = data.font_face.replace(/\\n/g, "\n");

    const importMatch = fontFace.match(/@import\s+url\(['"]?(.+?)['"]?\);?/);
    if (importMatch) {
      const link = document.createElement("link");
      link.id = styleId;
      link.rel = "stylesheet";
      link.href = importMatch[1];
      link.onload = () => {
        console.log(`Font ${data.title} loaded`);
      };
      document.head.appendChild(link);
      return;
    }

    if (fontFace.includes("@font-face")) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerText = fontFace;
      document.head.appendChild(style);
    }
  }, [data]);

  return (
    <FontCardContainer $theme={resolvedTheme} $fontFamily={fontFamily}>
      <FontCardHeader className="font_card_header" onClick={handleClick}>
        <FontCardHeaderBlock>
          <FontTitle className="font_title">{data?.title}</FontTitle>
          <FontAuthor>{data?.author}</FontAuthor>
        </FontCardHeaderBlock>
        <StyledRightOutlined className="styled_right_outlined" />
      </FontCardHeader>
      <FontCardBody>
        <StyledInput
          variant="borderless"
          placeholder={t("짠! 세상의 모든 폰트가 여기에.")}
          $fontSize={fontSize}
        />
      </FontCardBody>
      <FontCardFooter>
        {data?.font_weight > 1
          ? t("{{value}}가지 굵기", { value: data?.font_weight })
          : null}
      </FontCardFooter>
    </FontCardContainer>
  );
}
