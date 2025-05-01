"use client";

import { setFontSize, setFontWeight } from "@/styles";
import styled, { css } from "styled-components";

export const FontDetailInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;

  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
  `}
`;

export const FontInfoSection = styled.div<{
  $fontFamily?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${(props) =>
    props?.$fontFamily &&
    css`
      div {
        font-family: ${props?.$fontFamily} !important;
      }
    `}
`;

export const FontTitle = styled.div`
  font-size: ${setFontSize("max")};
  font-weight: ${setFontWeight("bold")};
  white-space: nowrap;
`;

export const FontInfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const FontInfoItem = styled.div`
  margin-right: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FontInfoItemKey = styled.div`
  white-space: nowrap;
`;

export const FontInfoItemValue = styled.div`
  white-space: nowrap;
`;

export const ActionSection = styled.div`
  display: flex;
  justify-content: flex-end;
`;
