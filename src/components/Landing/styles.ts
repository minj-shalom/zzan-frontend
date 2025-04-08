import {
  ActionButton,
  setFontSize,
  setFontWeight,
  setLineHeight,
} from "@/styles";
import Image from "next/image";
import styled from "styled-components";

export const LandingContainer = styled.div`
  height: 100%;
  margin: 40px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 24px;
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const LogoImage = styled(Image)`
  width: 60px;
  height: 60px;
`;

export const Title = styled.div`
  font-size: ${setFontSize("max")};
  font-weight: ${setFontWeight("extraBold")};
  line-height: ${setLineHeight("medium")};
  text-align: center;
  word-break: keep-all;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Description = styled.div`
  font-size: ${setFontSize("strong")};
  font-weight: ${setFontWeight("semiBold")};
  line-height: ${setLineHeight("medium")};
  text-align: center;
  word-break: keep-all;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const StyledActionButton = styled(ActionButton)`
  padding: 8px 24px;
  font-size: ${setFontSize("large")};
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;
