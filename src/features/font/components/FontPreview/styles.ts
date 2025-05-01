"use client";

import { setFontSize, setFontWeight } from "@/styles";
import styled from "styled-components";

export const FontPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FontPreviewHeader = styled.div`
  font-size: ${setFontSize("large")};
  font-weight: ${setFontWeight("semiBold")};
`;

export const FontPreviewBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FontPreviewController = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const FontPreviewControllerItem = styled.div`
  min-width: 250px;
  flex: 1;
`;

export const FontPreviewViewerList = styled.div`
  display: flex;
  flex-direction: column;
`;
