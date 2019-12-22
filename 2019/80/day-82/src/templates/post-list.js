import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Sidebar from "../components/sidebar";

import "../components/layout.css";

const PostList = (props) => {
  const posts = props.data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `react`]} />
      <div className="content">
        <Sidebar />
        <div className="main">
          {posts.map((post) => {
            const tags = post.node.frontmatter.tags.map(item => <a href={`/tags/${item.toLowerCase()}`} className="item-tags-tag">{item}</a>);
            return (
              <div key={post.node.id}>
                <Link to={post.node.fields.slug}>
                  <h2 className="item-title">{post.node.frontmatter.title}</h2>
                </Link>
                <small className="item-date">Publicado em {post.node.frontmatter.date}</small>
                <p className="item-content">{post.node.excerpt}</p>
                <Link to={post.node.fields.slug}>
                  <small>Leia mais</small>
                </Link>
                <div className="item-tags">{tags}</div>
              </div>
            )
          })}
          <div>
            {!isFirst && (
              <Link to={prevPage} rel="prev" style={{ textDecoration: `none` }}>
                <span>← Página Anterior</span>
              </Link>
            )}
            {!isLast && (
              <Link to={nextPage} rel="next" style={{ textDecoration: `none` }}>
                <span>Próxima página →</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const listQuery = graphql`
  query paginateQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          html
          id
          frontmatter {
            title
            date(formatString: "DD/MM/YYYY")
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

export default PostList;
