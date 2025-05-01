"use client";

import { useTranslation } from "react-i18next";
import { FontInterface } from "../../types";
import {
  FontPreviewBody,
  FontPreviewContainer,
  FontPreviewController,
  FontPreviewControllerItem,
  FontPreviewHeader,
  FontPreviewViewerList,
} from "./styles";
import { useCallback, useState } from "react";
import { MainSlider, PreviewTextBar } from "@/components";
import { debounce } from "lodash";
import { FontPreviewViewer } from "../FontPreviewViewer";

type FontPreviewProps = {
  font: FontInterface;
};

export function FontPreview({ font }: FontPreviewProps) {
  const { t } = useTranslation();

  const [previewText, setPreviewText] = useState("");
  const [debouncedPreviewText, setDebouncedPreviewText] = useState("");
  const [fontSize, setFontSize] = useState(30);

  const handleDebouncedPreviewTextChange = debounce((newText: string) => {
    setDebouncedPreviewText(newText);
  }, 30);

  const handlePreviewTextChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newText = e.target.value;

      if (newText !== previewText) {
        setPreviewText(newText);
        handleDebouncedPreviewTextChange(newText);
      }
    },
    [previewText, handleDebouncedPreviewTextChange]
  );

  const handleFontSizeChange = (value: number) => {
    setFontSize(value);
  };

  return (
    <FontPreviewContainer>
      <FontPreviewHeader>{t("미리보기")}</FontPreviewHeader>
      <FontPreviewBody>
        <FontPreviewController>
          <FontPreviewControllerItem>
            <PreviewTextBar
              value={previewText}
              placeholder={t("문구 적고 폰트 미리보기")}
              handleChange={handlePreviewTextChange}
            />
          </FontPreviewControllerItem>
          <FontPreviewControllerItem>
            <MainSlider
              min={10}
              max={100}
              value={fontSize}
              sliderValue={`${fontSize} px`}
              handleChange={handleFontSizeChange}
            />
          </FontPreviewControllerItem>
        </FontPreviewController>
        <FontPreviewViewerList>
          {font?.font_face_list?.map((item, index) => {
            return (
              <FontPreviewViewer
                key={`font-preview-viewer-item-${index}`}
                fontFace={item}
                debouncedPreviewText={debouncedPreviewText}
                fontSize={fontSize}
                type={font?.type}
              />
            );
          })}
        </FontPreviewViewerList>
      </FontPreviewBody>
    </FontPreviewContainer>
  );
}
