import React from "react";
import Layout from "../components/layout/layout";
import { Helmet } from "react-helmet";

const StuffTemplate = ({ pageContext }) => {
  const { slug } = pageContext;  

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
      </Helmet>
      {slug}
    </Layout>
  );
};

export default StuffTemplate;