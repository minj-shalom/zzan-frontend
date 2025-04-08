import styled from "styled-components";

export const MainLayoutContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  overflow: auto;
`;

export const MainLayoutBlock = styled.div`
  min-height: calc(100dvh - var(--header-height));
  display: flex;
  flex-direction: column;
`;

export const PageContainer = styled.div`
  flex: 1;
  padding: 16px;
`;
