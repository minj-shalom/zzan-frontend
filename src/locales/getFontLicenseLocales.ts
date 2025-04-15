import { FontLicenseEnum } from "@/features";

export const getFontLicenseLocales = (locale: FontLicenseEnum) => {
  switch (locale) {
    case FontLicenseEnum.PRINT:
      return "인쇄";
    case FontLicenseEnum.WEBSITE:
      return "웹사이트";
    case FontLicenseEnum.PACKAGING:
      return "포장지";
    case FontLicenseEnum.VIDEO:
      return "영상";
    case FontLicenseEnum.EMBEDDING:
      return "임베딩";
    case FontLicenseEnum.BI_CI:
      return "BI/CI";
    case FontLicenseEnum.OFL:
      return "OFL";
    default:
      return locale;
  }
};
