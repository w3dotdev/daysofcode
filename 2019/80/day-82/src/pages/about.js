import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar";

import "../components/layout.css";

const AboutPage = props => {
  return (
    <Layout>
      <SEO title="Sobre" />
      <div className="content">
        <Sidebar />
        <div className="main">
          <h2 className="page-title">Sobre</h2>
          <h3>What is Lorem Ipsum?</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

          <h3>Why do we use it?</h3>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, .</p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage;
