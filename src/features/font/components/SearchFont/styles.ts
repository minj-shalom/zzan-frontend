"use client";

import { setBorderRadius, setFontSize } from "@/styles";
import { LoadingOutlined } from "@ant-design/icons";
import { Dropdown, Input } from "antd";
import styled, { css } from "styled-components";

export const SearchFontContainer = styled(Dropdown)``;

export const SearchBar = styled(Input)`
  max-width: 300px;
  width: 300px;
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

  ${({ theme }) => theme.media.mobile`
    width: 100%;
  `}
`;

export const SearchResultContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

export const SearchResultEmpty = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background} !important;
  font-size: ${setFontSize("normal")};
  color: ${({ theme }) => theme.text} !important;
`;

export const SearchResultBlock = styled.div<{ $fontFamily?: string }>`
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;

  ${(props) =>
    props?.$fontFamily &&
    css`
      div {
        font-family: ${props?.$fontFamily} !important;
      }
    `}
`;

export const FontTitle = styled.div`
  font-size: ${setFontSize("normal")};
  white-space: nowrap;
`;

export const FontAuthor = styled.span`
  font-size: ${setFontSize("small")};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const ScrollIndicator = styled.div`
  height: 1px;
`;

export const SpinBlock = styled.div`
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLoadingOutlined = styled(LoadingOutlined)`
  font-size: ${setFontSize("large")};
`;
