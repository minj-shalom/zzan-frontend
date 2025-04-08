import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";
import {
  MainHeaderContainer,
  MenuItem,
  MenuOutlinedBlock,
  MenuSection,
  StyledMenuOutlined,
} from "./styles";
import { useGetUserAgentByWidth } from "@/hooks";

type MainHeaderProps = {
  handleOpen: () => void;
};

export function MainHeader({ handleOpen }: MainHeaderProps) {
  const { t } = useTranslation();
  const { userAgent } = useGetUserAgentByWidth();

  return (
    <MainHeaderContainer>
      {(userAgent === "mobile" || userAgent === "tablet") && (
        <StyledMenuOutlined onClick={handleOpen} />
      )}
      <Logo />
      {(userAgent === "mobile" || userAgent === "tablet") && (
        <MenuOutlinedBlock />
      )}
      {(userAgent === "laptop" || userAgent === "desktop") && (
        <MenuSection>
          <MenuItem href="/">{`${t("짠")}!`}</MenuItem>
          <MenuItem href="/all">{t("모든 폰트")}</MenuItem>
        </MenuSection>
      )}
    </MainHeaderContainer>
  );
}
