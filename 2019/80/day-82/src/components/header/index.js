import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import "../layout.css";

const Header = ({ siteTitle }) => {
  return (
    <header className="header">
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={{ color: `#fff`, textDecoration: `none` }}>
          {siteTitle}
        </Link>
      </h1>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;
