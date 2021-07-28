import * as React from "react";
import { Layout } from "../components/layout/pageLayout.component";
import { Title } from "../components/layout/pageTitle.component";
import { FlexWrapper } from "../components/layout/flex.component";
import { Helmet } from "react-helmet";
import { SendJson } from "../components/sendJson.component";
import { ListenJson } from "../components/listenJson.component";

const IndexPage = () => (
  <Layout>
    <Helmet>
      <title>Vocal JSON Protocol</title>
      <meta
        name="description"
        content="A not very optimized way to transfer data over the air"
      />
    </Helmet>
    <Title as="h1">Vocal JSON Protocol</Title>
    <Title as="h2">
      A not very optimized way to transfer data over the air
    </Title>
    <FlexWrapper>
      <SendJson />
      <ListenJson />
    </FlexWrapper>
  </Layout>
);

export default IndexPage;
