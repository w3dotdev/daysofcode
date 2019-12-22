import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar";

import "../components/layout.css";

const Tag = ({ pageContext, data }) => {
  const posts = data.allMarkdownRemark.edges;
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} artigo${totalCount === 1 ? "" : "s"} com a tag "${tag}"`;

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `react`]} />
      <div className="content">
        <Sidebar />
        <div className="main">
          <h2 className="page-title">{tagHeader}</h2>
          {posts.map((post) => {
            const tags = post.node.frontmatter.tags.map(item => <a href={`/tags/${item.toLowerCase()}`} className="item-tags-tag">{item}</a>);
            return (
              <div className="item" key={post.node.id}>
                <Link to={post.node.fields.slug}>
                  <h2 className="item-title">{post.node.frontmatter.title}</h2>
                </Link>
                <small className="item-date">Publicado em {post.node.frontmatter.date}</small>
                <p className="item-content">{post.node.excerpt}</p>
                <Link className="item-link" to={post.node.fields.slug}>Leia mais</Link>
                <div className="item-tags">{tags}</div>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

Tag.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export const pageQuery = graphql`
query($tag: String) {
  site {
    siteMetadata {
      title
      author
    }
  }
  allMarkdownRemark(
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { tags: { in: [$tag] } } }
  ) {
    totalCount
    edges {
      node {
        excerpt(pruneLength: 200)
        html
        id
        frontmatter {
          title
          date(formatString: "MM/YYYY")
          tags
        }
        fields {
          slug
        }
      }
    }
  }
}
`

export default Tag;
