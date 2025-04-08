import { setFontColor, setFontSize, setFontWeight } from "@/styles";
import { Drawer } from "antd";
import Link from "next/link";
import styled from "styled-components";

export const MainDrawerContainer = styled(Drawer)`
  .ant-drawer-header-title {
    gap: 8px;
  }
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
  color: ${setFontColor("strong")};
  cursor: pointer;
`;
