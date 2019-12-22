import React from "react";

import "../layout.css";

const SocialLinks = ({ contacts }) => {
  return (
    <ul className="socialList">
      <li className="socialList-item"><a className="socialList-link" href={contacts.linkedin}>LinkedIn</a></li>
      <li className="socialList-item"><a className="socialList-link" href={contacts.github}>GitHub</a></li>
      <li className="socialList-item"><a className="socialList-link" href={contacts.twitter}>Twitter</a></li>
    </ul>
  )
}

export default SocialLinks;
