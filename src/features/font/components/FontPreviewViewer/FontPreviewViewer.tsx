"use client";

import { useTranslation } from "react-i18next";
import { FontFaceInterface, FontTypeEnum } from "../../types";
import {
  FontPreviewViewerContainer,
  FontPreviewViewerFontWeight,
  StyledInput,
} from "./styles";
import { useEffect, useState } from "react";

type FontPreviewViewerProps = {
  fontFace: FontFaceInterface;
  debouncedPreviewText: string;
  fontSize: number;
  type: FontTypeEnum;
};

export function FontPreviewViewer({
  fontFace,
  debouncedPreviewText,
  fontSize,
  type,
}: FontPreviewViewerProps) {
  const { t } = useTranslation();

  const match = fontFace?.font_face?.match(
    /font-family:\s*['"]?([^;'"]+)['"]?;/
  );
  const fontFamily = match?.[1];

  const [inputValue, setInputValue] = useState("");

  const handleInputValueChange = (value: string) => {
    setInputValue(value);
  };

  useEffect(() => {
    const styleId = `font-name-${fontFamily}`;
    if (document.getElementById(styleId)) return;
    const fontFaceText = fontFace?.font_face?.replace(/\\n/g, "\n");
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
  }, [fontFace, fontFamily]);

  useEffect(() => {
    setInputValue(debouncedPreviewText);
  }, [debouncedPreviewText]);

  return (
    <FontPreviewViewerContainer $fontFamily={fontFamily}>
      <StyledInput
        value={inputValue}
        variant="borderless"
        placeholder={
          type === FontTypeEnum.ENGLISH
            ? t("ZZAN! All the fonts in the world, right here.")
            : t("짠! 세상의 모든 폰트가 여기에.")
        }
        onChange={(e) => handleInputValueChange(e?.target?.value)}
        $fontSize={fontSize}
      />
      <FontPreviewViewerFontWeight>
        {fontFace?.font_weight}
      </FontPreviewViewerFontWeight>
    </FontPreviewViewerContainer>
  );
}
