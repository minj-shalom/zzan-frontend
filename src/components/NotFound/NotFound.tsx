"use client";

import { useTranslation } from "react-i18next";
import {
  Description,
  NotFoundContainer,
  StyledActionButton,
  Title,
  TitleBlock,
} from "./styles";
import { useRouter } from "next/navigation";

export function NotFound() {
  const { t } = useTranslation();
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  return (
    <NotFoundContainer>
      <TitleBlock>
        <Title>{t("페이지를 찾을 수 없습니다.")}</Title>
      </TitleBlock>
      <Description>
        {t(
          "방문하려는 페이지 주소가 잘못 입력되었거나,\n요청하신 페이지 주소가 변경 혹은 삭제되었을 수 있습니다.\n주소를 다시 확인해주세요."
        )
          ?.split("\n")
          ?.map((text, index) => (
            <p key={String(index)}>{text}</p>
          ))}
      </Description>
      <StyledActionButton onClick={handleHome}>
        {t("홈으로 이동하기")}
      </StyledActionButton>
    </NotFoundContainer>
  );
}
