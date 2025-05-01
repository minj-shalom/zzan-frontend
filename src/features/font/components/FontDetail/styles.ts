"use client";

import styled, { css } from "styled-components";

export const FontDetailContainer = styled.div`
  padding: 40px 16px 0;
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const FontDetailContent = styled.div`
  width: 100%;
  display: flex;
  gap: 48px;

  ${({ theme }) => theme.media.mobile`
    flex-direction: column;
  `}

  ${({ theme }) => theme.media.tablet`
    flex-direction: column;
  `}
`;

export const FontDetailContentBlock = styled.div<{ $width?: string }>`
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${(props) =>
    props?.$width &&
    css`
      width: ${props?.$width};
    `}

  ${({ theme }) => theme.media.mobile`
    width: 100% !important;
  `}

  ${({ theme }) => theme.media.tablet`
    width: 100% !important;
  `}
`;
