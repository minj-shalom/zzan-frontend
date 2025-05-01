"use client";

import {
  setBackgroundColor,
  setBorder,
  setBorderRadius,
  setFontColor,
  setFontSize,
  setFontWeight,
} from "@/styles";
import { RightOutlined } from "@ant-design/icons";
import { Input } from "antd";
import styled, { css } from "styled-components";

export const FontCardContainer = styled.div<{
  $theme?: string;
  $fontFamily?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: ${setBorder("weak")};
  border-radius: ${setBorderRadius("small")};

  :hover {
    .font_card_header {
      border-bottom: ${setBorder("special")} !important;
    }

    .font_title {
      background-color: ${setBackgroundColor("special")} !important;
      color: ${setFontColor("white")} !important;
    }

    .styled_right_outlined {
      display: block !important;
    }
  }

  ${(props) =>
    props?.$theme &&
    props?.$theme === "light" &&
    css`
      background-color: ${setBackgroundColor("white")};
    `}

  ${(props) =>
    props?.$theme &&
    props?.$theme === "dark" &&
    css`
      background-color: ${setBackgroundColor("strong")};
    `}

  ${(props) =>
    props?.$fontFamily &&
    css`
      div,
      input {
        font-family: ${props?.$fontFamily} !important;
      }
    `}
`;

export const FontCardHeader = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-bottom: ${setBorder("weak")};
  cursor: pointer;
`;

export const FontCardHeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FontTitle = styled.div`
  width: fit-content;
  padding: 2px;
  font-size: ${setFontSize("large")};
  font-weight: ${setFontWeight("semiBold")};
`;

export const FontAuthor = styled.div`
  font-size: ${setFontSize("normal")};
  font-weight: ${setFontWeight("medium")};
`;

export const StyledRightOutlined = styled(RightOutlined)`
  display: none;
  font-size: ${setFontSize("large")};
`;

export const FontCardBody = styled.div`
  padding: 16px;
`;

export const StyledInput = styled(Input)<{ $fontSize: number }>`
  padding: 0 !important;
  color: ${({ theme }) => theme.text} !important;

  ::placeholder {
    color: ${({ theme }) => theme.text} !important;
  }

  ${(props) =>
    props?.$fontSize &&
    css`
      font-size: ${`${props?.$fontSize}px`} !important;

      ::placeholder {
        font-size: ${`${props?.$fontSize}px`} !important;
      }
    `}
`;

export const FontCardFooter = styled.div`
  padding: 16px;
  display: flex;
  justify-content: flex-end;
`;
