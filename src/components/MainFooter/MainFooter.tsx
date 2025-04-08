import { CONTACT_EMAIL, GITHUB_URL } from "@/configs";
import {
  MainFooterContainer,
  MenuItem,
  MenuSection,
  ServiceDescription,
  ServiceDescriptionBlock,
  ServiceSection,
  ServiceTitle,
} from "./styles";
import { openNewTab } from "@/utils";
import { useTranslation } from "react-i18next";

export function MainFooter() {
  const { t } = useTranslation();

  const handleContact = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  };

  const handleGithub = () => {
    if (GITHUB_URL) {
      openNewTab(GITHUB_URL);
    }
  };

  return (
    <MainFooterContainer>
      <ServiceSection>
        <ServiceTitle>{`${t("짠")}!`}</ServiceTitle>
        <ServiceDescription>{`© ${new Date().getFullYear()} ZZAN`}</ServiceDescription>
        <ServiceDescriptionBlock>
          <ServiceDescription>
            {t("모든 폰트의 저작권은 모두 각 폰트의 저작권자에게 있습니다.")}
          </ServiceDescription>
          <ServiceDescription>
            {t("폰트 사용에 대한 라이센스 문의는 저작권자에게 문의해주세요.")}
          </ServiceDescription>
        </ServiceDescriptionBlock>
      </ServiceSection>
      <MenuSection>
        {CONTACT_EMAIL && (
          <MenuItem onClick={handleContact}>{t("문의하기")}</MenuItem>
        )}
        {GITHUB_URL && (
          <MenuItem onClick={handleGithub}>{t("Github")}</MenuItem>
        )}
      </MenuSection>
    </MainFooterContainer>
  );
}
