import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

export const LogoImage = styled(Image)`
  width: auto;
  height: calc(var(--header-height) - 24px);
`;
