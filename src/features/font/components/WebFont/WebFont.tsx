"use client";

import { useTranslation } from "react-i18next";
import {
  StyledCopyOutlined,
  WebFontBody,
  WebFontContainer,
  WebFontHeader,
} from "./styles";
import { FontInterface } from "../../types";
import { message } from "antd";

type WebFontProps = {
  font: FontInterface;
};

export function WebFont({ font }: WebFontProps) {
  const { t } = useTranslation();

  const handleCopy = () => {
    navigator.clipboard
      .writeText(font?.font_face?.replace(/\\n/g, "\n"))
      ?.then(() => {
        return message.success(t("웹폰트가 복사되었습니다."));
      })
      ?.catch(() => {
        return message.error(t("웹폰트 복사에 실패하였습니다."));
      });
  };

  return (
    <WebFontContainer>
      <WebFontHeader>
        {t("웹폰트로 사용")}
        <StyledCopyOutlined onClick={handleCopy} />
      </WebFontHeader>
      <WebFontBody>{font?.font_face?.replace(/\\n/g, "\n")}</WebFontBody>
    </WebFontContainer>
  );
}
