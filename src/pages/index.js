import * as React from "react";
import { Layout } from "../components/layout/pageLayout.component";
import { Title } from "../components/layout/pageTitle.component";
import { FlexWrapper } from "../components/layout/flex.component";
import { Helmet } from "react-helmet";
import { Send } from "../components/send.component";
import { Listen } from "../components/listen.component";

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>NOTA Protocol</title>
      <meta
        name="description"
        content="A not very optimized way to transfer data over the air"
      />
    </Helmet>
    <Title as="h1">NOTA Protocol</Title>
    <Title as="h2">
      A not very optimized way to transfer data over the air
    </Title>
    <FlexWrapper>
      <Send />
      <Listen />
    </FlexWrapper>
  </Layout>
);

export default IndexPage;
