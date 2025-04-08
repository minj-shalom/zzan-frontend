import {
  setBackgroundColor,
  setBorder,
  setFontColor,
  setFontSize,
  setFontWeight,
} from "@/styles";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import styled from "styled-components";

export const MainHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 50px;
  background: ${setBackgroundColor("white")};
  border-bottom: ${setBorder("extraWeak")};
  z-index: 1000;

  ${({ theme }) => theme.media.mobile`
    padding: 10px 24px;
    justify-content: space-between;
  `}

  ${({ theme }) => theme.media.tablet`
    padding: 10px 24px;
    justify-content: space-between;
  `}
`;

export const StyledMenuOutlined = styled(MenuOutlined)`
  font-size: ${setFontSize("large")};
  cursor: pointer;
`;

export const MenuOutlinedBlock = styled.div`
  width: 20px;
  height: 20px;
`;

export const MenuSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MenuItem = styled(Link)`
  white-space: nowrap;
  font-size: ${setFontSize("medium")};
  font-weight: ${setFontWeight("medium")};
  color: ${setFontColor("strong")};
  cursor: pointer;
`;
