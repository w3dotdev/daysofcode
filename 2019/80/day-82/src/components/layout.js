// Gatsby is a free and open source framework based on React that helps developers build blazing fast websites and apps.
//
// npm install -g gatsby-cli
// gatsby new day82
// gatsby develop
import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Header from "./header";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            tagline
            author
            contacts {
              linkedin
              github
              twitter
            }
          }
        }
      }
    `}
      render={data => (
        <div className="container">
          <Header
            siteTitle={data.site.siteMetadata.title}
            tagline={data.site.siteMetadata.tagline}
            author={data.site.siteMetadata.author}
            contacts={data.site.siteMetadata.contacts} />
          <main>{children}</main>
          <footer className="footer">
            <p>© {new Date().getFullYear()} <a href="https://nerdcalistenico.com.br" className="link">Nerd Calistênico</a></p>
          </footer>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
