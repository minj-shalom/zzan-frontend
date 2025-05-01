"use client";

import { setBorderRadius } from "@/styles";
import { Input } from "antd";
import styled from "styled-components";

export const PreviewTextBarContainer = styled(Input)`
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
