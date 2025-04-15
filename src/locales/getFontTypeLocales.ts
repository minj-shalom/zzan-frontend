import { FontTypeEnum } from "@/features";

export const getFontTypeLocales = (locale: FontTypeEnum) => {
  switch (locale) {
    case FontTypeEnum.SANS_SERIF:
      return "고딕";
    case FontTypeEnum.SERIF:
      return "바탕";
    case FontTypeEnum.HANDWRITING:
      return "손글씨";
    case FontTypeEnum.DECORATIVE:
      return "장식체";
    case FontTypeEnum.PIXEL:
      return "픽셀체";
    case FontTypeEnum.TRADITIONAL_SCRIPT:
      return "고전체";
    case FontTypeEnum.ROUNDED_SANS:
      return "탈네모";
    case FontTypeEnum.CALLIGRAPHY_FONT:
      return "캘리폰트";
    case FontTypeEnum.CODING_FONT:
      return "코딩체";
    case FontTypeEnum.ENGLISH:
      return "영문";
    default:
      return locale;
  }
};
