"use client";

import { useTranslation } from "react-i18next";
import {
  Description,
  LandingContainer,
  LogoImage,
  StyledActionButton,
  Title,
  TitleBlock,
} from "./styles";
import { ZzanLogo } from "@/assets";
import { useRouter } from "next/navigation";

export function Landing() {
  const { t } = useTranslation();
  const router = useRouter();

  const handleStart = () => {
    router.push("/all");
  };

  return (
    <LandingContainer>
      <TitleBlock>
        <LogoImage src={ZzanLogo.src} alt="logo" width={60} height={60} />
        <Title>{t("세상의 모든 폰트가 여기에.")}</Title>
      </TitleBlock>
      <Description>
        {t("다양한 폰트를 빠르게 찾고 쉽게 사용해보세요!")}
      </Description>
      <StyledActionButton onClick={handleStart}>
        {t("바로 시작하기")}
      </StyledActionButton>
    </LandingContainer>
  );
}
