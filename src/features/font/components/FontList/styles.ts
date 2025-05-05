"use client";

import { setFontSize } from "@/styles";
import { LoadingOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const FontListContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 24px;
`;

export const CardSection = styled.div`
  width: 100%;
  padding: 0 32px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  grid-gap: 16px;

  ${({ theme }) => theme.media.mobile`
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  `}

  ${({ theme }) => theme.media.tablet`
    grid-template-columns: repeat(auto-fill, minmax(296px, 1fr));
  `}
`;

export const ScrollIndicator = styled.div`
  height: 1px;
`;

export const StyledLoadingOutlined = styled(LoadingOutlined)`
  font-size: ${setFontSize("large")};
`;
