import { setBorder, setFontSize, setFontWeight } from "@/styles";
import { Drawer } from "antd";
import Link from "next/link";
import styled from "styled-components";

export const MainDrawerContainer = styled(Drawer)`
  background-color: ${({ theme }) => theme.background} !important;

  .ant-drawer-header {
    border-bottom: ${setBorder("extraWeak")} !important;
  }

  .ant-drawer-header-title {
    gap: 8px;
  }

  .ant-drawer-close {
    color: ${({ theme }) => theme.text} !important;
  }

  .ant-drawer-body {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuItem = styled(Link)`
  white-space: nowrap;
  font-size: ${setFontSize("medium")};
  font-weight: ${setFontWeight("medium")};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
