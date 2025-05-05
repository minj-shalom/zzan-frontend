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
  flex: 1;
`;

export const PageContainer = styled.div`
  height: 100%;
  padding: 0 0 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;
