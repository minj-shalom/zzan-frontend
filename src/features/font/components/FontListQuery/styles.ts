"use client";

import { setBorder, setBorderRadius, setFontSize } from "@/styles";
import { Button } from "antd";
import styled, { css } from "styled-components";

export const FontListQueryContainer = styled.div`
  position: sticky;
  top: var(--header-height);
  left: 0;
  z-index: 1000;
  width: 100%;
  margin-bottom: -24px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: ${({ theme }) => theme.background} !important;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`;

export const DropdownBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow: auto;
`;

export const DropdownButton = styled(Button)<{ $open?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.background} !important;
  border-radius: ${setBorderRadius("strong")};
  font-size: ${setFontSize("normal")};
  color: ${({ theme }) => theme.text} !important;

  span:last-child {
    font-size: ${setFontSize("small")};
  }

  ${(props) =>
    props?.$open &&
    css`
      border: ${setBorder("special")};
    `}
`;

export const SliderSection = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  ${({ theme }) => theme.media.mobile`
    flex-wrap: wrap;
  `}

  ${({ theme }) => theme.media.tablet`
    flex-wrap: wrap;
  `}
`;
