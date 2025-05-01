"use client";

import { setBorder } from "@/styles";
import { Input } from "antd";
import styled, { css } from "styled-components";

export const FontPreviewViewerContainer = styled.div<{
  $fontFamily?: string;
}>`
  padding: 8px 0;
  display: flex;
  align-items: center;
  border-top: ${setBorder("weak")};

  ${(props) =>
    props?.$fontFamily &&
    css`
      div,
      input {
        font-family: ${props?.$fontFamily} !important;
      }
    `}
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

export const FontPreviewViewerFontWeight = styled.div``;
