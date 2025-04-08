import {
  setBackgroundColor,
  setFontColor,
  setFontSize,
  setFontWeight,
  setLineHeight,
} from "@/styles";
import styled from "styled-components";

export const MainFooterContainer = styled.div`
  height: fit-content;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 40px;
  background-color: ${setBackgroundColor("special")};
`;

export const ServiceSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ServiceTitle = styled.div`
  font-size: ${setFontSize("big")};
  font-weight: ${setFontWeight("bold")};
  color: ${setFontColor("white")};
`;

export const ServiceDescriptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ServiceDescription = styled.div`
  font-size: ${setFontSize("normal")};
  font-weight: ${setFontWeight("normal")};
  color: ${setFontColor("white")};
  line-height: ${setLineHeight("space")};
  word-break: keep-all;
`;

export const MenuSection = styled.div`
  display: flex;
  gap: 8px;
`;

export const MenuItem = styled.div`
  font-size: ${setFontSize("normal")};
  font-weight: ${setFontWeight("semiBold")};
  color: ${setFontColor("white")};
  text-decoration: underline;
  cursor: pointer;
`;
