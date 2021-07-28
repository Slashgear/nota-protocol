import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const PageLayout = styled.main`
  position: absolute;
  width: 100%;
  background-image: linear-gradient(135deg, #30184b 0%, #363c48 100%);
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
