"use client";

import {
  setBorder,
  setBorderRadius,
  setFontSize,
  setFontWeight,
  setLineHeight,
} from "@/styles";
import styled from "styled-components";

export const FontLicenseContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FontLicenseContentHeader = styled.div`
  font-size: ${setFontSize("large")};
  font-weight: ${setFontWeight("semiBold")};
`;

export const FontLicenseContentBody = styled.pre`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-x: auto;
  border: ${setBorder("weak")};
  border-radius: ${setBorderRadius("small")};
  font-size: ${setFontSize("medium")};
  font-weight: ${setFontWeight("normal")};
  line-height: ${setLineHeight("space")};
  word-break: keep-all;
`;
