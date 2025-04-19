import { setBorder, setFontColor, setFontSize, setFontWeight } from "@/styles";
import {
  MenuOutlined,
  MoonFilled,
  SearchOutlined,
  SunFilled,
} from "@ant-design/icons";
import Link from "next/link";
import styled, { css } from "styled-components";

export const MainHeaderContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
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

export const MainHeaderBlock = styled.div<{ $gap?: string }>`
  display: flex;
  align-items: center;
  gap: 16px;

  ${(props) =>
    props?.$gap &&
    css`
      gap: ${props?.$gap};
    `}
`;

export const MobileLogoBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MenuButton = styled(MenuOutlined)`
  font-size: ${setFontSize("large")};
  cursor: pointer;
`;

export const SearchButton = styled(SearchOutlined)`
  font-size: ${setFontSize("large")};
  cursor: pointer;
`;

export const MenuSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ThemeButton = styled.div`
  cursor: pointer;
`;

export const StyledSunFilled = styled(SunFilled)`
  font-size: ${setFontSize("large")};
  color: ${setFontColor("yellow")};
`;

export const StyledMoonFilled = styled(MoonFilled)`
  font-size: ${setFontSize("large")};
  color: ${setFontColor("yellow")};
`;

export const MenuItem = styled(Link)`
  white-space: nowrap;
  font-size: ${setFontSize("medium")};
  font-weight: ${setFontWeight("medium")};
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;
