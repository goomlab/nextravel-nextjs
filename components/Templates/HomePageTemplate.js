import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Layout from "../Layouts/MainLayout/MainLayout";

const HomePageTemplate = props => {
  if (!props.data || props.data.length <= 0) {
    return (
      <Layout>
        <div>Data not found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section class="section-main">
        <div class="container">
          <div class="primary-title text-center">
            <h2>{props.data}
              {/* {props.data.subtitle.it} */}
            </h2>
          </div>
          <div class="primary-description text-center">
            {/* {props.data.content.it} */}
            <strong>081 000000</strong>
          </div>
        </div>
      </section> 
    </Layout>
  );
};

export default HomePageTemplate;
