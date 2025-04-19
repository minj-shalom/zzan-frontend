"use client";

import {
  setBackgroundColor,
  setBorder,
  setBorderRadius,
  setFontSize,
} from "@/styles";
import { Button, Input, Slider } from "antd";
import styled, { css } from "styled-components";

export const FontListQueryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`;

export const PreviewTextBar = styled(Input)`
  min-width: 200px;
  height: 40px;
  padding: 4px 24px;
  flex: 1;
  background-color: ${({ theme }) => theme.background} !important;
  border-radius: ${setBorderRadius("strong")};
  color: ${({ theme }) => theme.text} !important;

  && .ant-input {
    &::placeholder {
      color: ${({ theme }) => theme.text} !important;
    }
  }

  .ant-input-clear-icon {
    color: ${({ theme }) => theme.text} !important;
  }
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

export const SliderBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SliderKey = styled.div`
  width: 55px !important;
  white-space: nowrap;
`;

export const SliderValue = styled.div`
  width: 35px !important;
  white-space: nowrap;
`;

export const StyledSlider = styled(Slider)`
  flex: 1;
  .ant-slider-rail {
    background-color: ${setBackgroundColor("semiWeak")} !important;
  }
`;
