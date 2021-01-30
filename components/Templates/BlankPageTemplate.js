import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../Layouts/MainLayout/MainLayout";

const BlankPageTemplate = props => {
  if (!props.data || props.data.length <= 0) {
    return (
      <Layout>
        <div>Data not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="section-main">
        <div className="container">
          <div className="">
            <h1>
              {props.data.title.it}
            </h1>
          </div>
          <div className="">
            <div dangerouslySetInnerHTML={{ __html: props.data.content.it }} />
          </div>
        </div>
      </section> 
    </Layout>
  );
};

export default BlankPageTemplate;
