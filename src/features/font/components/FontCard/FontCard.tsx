"use client";

import { useTranslation } from "react-i18next";
import { FontInterface, FontTypeEnum } from "../../types";
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
import React, { useEffect, useState } from "react";

type FontCardProps = {
  font: FontInterface;
  debouncedPreviewText: string;
  fontSize: number;
};

export const FontCard = React.memo(function FontCard({
  font,
  debouncedPreviewText,
  fontSize,
}: FontCardProps) {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const router = useRouter();

  const match = font?.font_face?.match(/font-family:\s*['"]?([^;'"]+)['"]?;/);
  const fontFamily = match?.[1];

  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    router.push(`/font/${font?.id}`);
  };

  const handleInputValueChange = (value: string) => {
    setInputValue(value);
  };

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

  useEffect(() => {
    setInputValue(debouncedPreviewText);
  }, [debouncedPreviewText]);

  return (
    <FontCardContainer $theme={resolvedTheme} $fontFamily={fontFamily}>
      <FontCardHeader className="font_card_header" onClick={handleClick}>
        <FontCardHeaderBlock>
          <FontTitle className="font_title">{font?.title}</FontTitle>
          <FontAuthor>{font?.author}</FontAuthor>
        </FontCardHeaderBlock>
        <StyledRightOutlined className="styled_right_outlined" />
      </FontCardHeader>
      <FontCardBody>
        <StyledInput
          value={inputValue}
          variant="borderless"
          placeholder={
            font?.type === FontTypeEnum.ENGLISH
              ? t("ZZAN! All the fonts in the world, right here.")
              : t("짠! 세상의 모든 폰트가 여기에.")
          }
          onChange={(e) => handleInputValueChange(e?.target?.value)}
          $fontSize={fontSize}
        />
      </FontCardBody>
      <FontCardFooter>
        {font?.font_weight > 1
          ? t("{{value}}가지 굵기", { value: font?.font_weight })
          : null}
      </FontCardFooter>
    </FontCardContainer>
  );
});
