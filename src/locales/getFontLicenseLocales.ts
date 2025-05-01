import { FontLicenseEnum } from "@/features";

export const getFontLicenseLocales = (
  type: "name" | "description",
  locale: FontLicenseEnum
) => {
  if (type === "name") {
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
  } else {
    switch (locale) {
      case FontLicenseEnum.PRINT:
        return "브로슈어, 포스터, 책, 잡지 및 출판용 인쇄물 등";
      case FontLicenseEnum.WEBSITE:
        return "웹페이지, 광고 배너, 메일, E-브로슈어 등";
      case FontLicenseEnum.PACKAGING:
        return "판매용 상품의 패키지";
      case FontLicenseEnum.VIDEO:
        return "영상물 자막, 영화 오프닝/엔딩 크레딧, UCC 등";
      case FontLicenseEnum.EMBEDDING:
        return "웹사이트 및 프로그램 서버 내 폰트 탑재, E-book 제작";
      case FontLicenseEnum.BI_CI:
        return "회사명, 브랜드명, 상품명, 로고, 마크, 슬로건, 캐치프레이즈";
      case FontLicenseEnum.OFL:
        return "폰트 파일의 수정/ 복제/ 배포 가능. 단, 폰트 파일의 유료 판매는 금지";
      default:
        return locale;
    }
  }
};
