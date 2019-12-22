import React from "react";

import "../layout.css";

const Bio = ({ author, tagline }) => {
  return (
    <div className="bio">
      <img className="bio-image" src='https://nerdcalistenico.com.br/assets/img/site/global/hemerson-vianna.jpg' style={{ maxWidth: `100px` }} alt="" />
      <h3 className="bio-title">{author}</h3>
      <small className="bio-tags">{tagline}</small>
    </div>
  )
}

export default Bio;
