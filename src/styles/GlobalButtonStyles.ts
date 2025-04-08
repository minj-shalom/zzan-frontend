"use client";

import styled, { css } from "styled-components";
import { Button } from "antd";

export const ActionButton = styled(Button)<{ disabled?: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: var(--background-color-purple);
  border: var(--border-transparent) !important;
  border-radius: var(--border-radius-normal);
  box-shadow: none;
  font-size: var(--font-size-medium);
  color: var(--font-color-white) !important;
  transition: var(--transition-fast);

  :hover {
    background-color: var(--background-color-purple-semi-light) !important;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--background-color-weak) !important;
      border: var(--border-weak) !important;
      color: var(--font-color-weak) !important;

      :hover {
        background-color: var(--background-color-weak) !important;
      }
    `}
`;

export const NormalButton = styled(Button)<{ disabled?: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: var(--background-color-white);
  border: var(--border-weak);
  border-radius: var(--border-radius-normal);
  box-shadow: none;
  font-size: var(--font-size-medium);
  color: var(--font-color-normal);
  transition: var(--transition-fast);

  :hover {
    border: var(--border-purple) !important;
    color: var(--font-color-purple) !important;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--background-color-weak) !important;
      border: var(--border-weak) !important;
      color: var(--font-color-weak) !important;

      :hover {
        border: var(--border-weak) !important;
        color: var(--font-color-weak) !important;
      }
    `}
`;

export const DangerButton = styled(Button)<{ disabled?: boolean }>`
  width: fit-content;
  height: fit-content;
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: var(--background-color-danger);
  border: var(--border-transparent) !important;
  border-radius: var(--border-radius-normal);
  box-shadow: none;
  font-size: var(--font-size-medium);
  color: var(--font-color-white) !important;
  transition: var(--transition-fast);

  :hover {
    background-color: var(--background-color-danger-hover) !important;
  }

  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--background-color-weak) !important;
      border: var(--border-weak) !important;
      color: var(--font-color-weak) !important;

      :hover {
        background-color: var(--background-color-weak) !important;
      }
    `}
`;

export const TextButton = styled.div`
  width: fit-content;
  height: 36px;
  padding: 4px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: var(--border-radius-normal);
  font-size: var(--font-size-normal);
  font-weight: var(--font-weight-normal);
  color: var(--font-color-normal);
  cursor: pointer;

  :hover {
    background-color: var(--background-color-weak);
  }
`;
