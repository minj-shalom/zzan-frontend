"use client";

import {
  setBorder,
  setBorderRadius,
  setFontSize,
  setFontWeight,
  setLineHeight,
} from "@/styles";
import { CopyOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const WebFontContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WebFontHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${setFontSize("large")};
  font-weight: ${setFontWeight("semiBold")};
`;

export const StyledCopyOutlined = styled(CopyOutlined)`
  font-size: ${setFontSize("medium")};
  cursor: pointer;
`;

export const WebFontBody = styled.pre`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-x: auto;
  border: ${setBorder("weak")};
  border-radius: ${setBorderRadius("small")};
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    Liberation Mono, Courier New, monospace;
  font-style: italic;
  line-height: ${setLineHeight("space")};
`;
