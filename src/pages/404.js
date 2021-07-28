import * as React from "react";
import { Layout } from "../components/layout/pageLayout.component";
import { Title } from "../components/layout/pageTitle.component";
import { Helmet } from "react-helmet";

const NotFoundPage = () => (
  <Layout>
    <Helmet>
      <title>404 not found</title>
    </Helmet>
    <Title as="h1">404 not found, sorry</Title>
  </Layout>
);

export default NotFoundPage;
