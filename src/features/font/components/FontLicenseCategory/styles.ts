"use client";

import { setFontSize, setFontWeight } from "@/styles";
import styled from "styled-components";

export const FontLicenseCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FontLicenseCategoryHeader = styled.div`
  font-size: ${setFontSize("large")};
  font-weight: ${setFontWeight("semiBold")};
`;

export const FontLicenseCategoryBody = styled.pre`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  white-space: nowrap;
  text-align: center;
`;

export const FontLicenseInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: ${setFontSize("normal")};
  font-weight: ${setFontWeight("light")};
`;
