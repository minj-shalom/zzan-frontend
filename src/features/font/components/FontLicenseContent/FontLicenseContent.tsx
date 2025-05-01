"use client";

import { useTranslation } from "react-i18next";
import {
  FontLicenseContentBody,
  FontLicenseContentContainer,
  FontLicenseContentHeader,
} from "./styles";
import { FontInterface } from "../../types";

type FontLicenseContentProps = {
  font: FontInterface;
};

export function FontLicenseContent({ font }: FontLicenseContentProps) {
  const { t } = useTranslation();

  return (
    <FontLicenseContentContainer>
      <FontLicenseContentHeader>{t("라이센스 본문")}</FontLicenseContentHeader>
      <FontLicenseContentBody>
        {font?.license?.content?.replace(/\\n/g, "\n")}
      </FontLicenseContentBody>
    </FontLicenseContentContainer>
  );
}
