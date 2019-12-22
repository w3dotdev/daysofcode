import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Bio from "./bio";
import SocialLinks from "./social-links";

import "../layout.css";

const Sidebar = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteBioQuery {
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
          allMarkdownRemark(
            limit: 10
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="sidebar">
          <Bio author={data.site.siteMetadata.author} tagline={data.site.siteMetadata.tagline} />
          <SocialLinks contacts={data.site.siteMetadata.contacts} />
          <nav className="menu">
            <ul className="menu-list">
              <li className="menu-item"><Link to="/" className="menu-link">Home</Link></li>
              <li className="menu-item"><Link to="/about" className="menu-link">Sobre</Link></li>
            </ul>
          </nav>
        </div>
      )}
    />
  )
}

export default Sidebar;
