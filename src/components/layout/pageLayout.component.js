import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const PageLayout = styled.main`
  position: absolute;
  width: 100%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 60%,
    rgba(1, 141, 170, 1) 100%
  );
  overflow: hidden;
  top: 0;
  min-height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
  body {
    position: relative;
    margin: 0;
    padding: 0;
    font-family: "Tahoma", sans-serif;
    color: white;
  }
`;
export const Layout = ({ children }) => (
  <PageLayout>
    <GlobalStyle />
    {children}
  </PageLayout>
);
