import { useTranslation } from "react-i18next";
import { Logo } from "../Logo";
import { MainDrawerContainer, MenuItem, MenuSection } from "./styles";

type MainDrawerProps = {
  open: boolean;
  handleClose: () => void;
};

export function MainDrawer({ open, handleClose }: MainDrawerProps) {
  const { t } = useTranslation();

  return (
    <MainDrawerContainer
      open={open}
      placement="left"
      width="100dvw"
      title={<Logo />}
      onClose={handleClose}
    >
      <MenuSection>
        <MenuItem href="/" onClick={handleClose}>
          {`${t("짠")}!`}
        </MenuItem>
        <MenuItem href="/all" onClick={handleClose}>
          {t("모든 폰트")}
        </MenuItem>
      </MenuSection>
    </MainDrawerContainer>
  );
}
