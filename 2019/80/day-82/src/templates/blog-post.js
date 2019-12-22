import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar";

import "../components/layout.css";

const BlogPost = (props) => {
  const post = props.data.markdownRemark;
  const tags = post.frontmatter.tags;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="content">
        <Sidebar />
        <div className="main">
          <h2 className="post-title">{post.frontmatter.title}</h2>
          <div className="post-tags">{tags.map(item => <a href={`/tags/${item.toLowerCase()}`} className="post-tags-tag">{item}</a>)}</div>
          <small className="post-date">Publicado em {post.frontmatter.date}</small>
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        tags
      }
    }
  }
`

export default BlogPost;
