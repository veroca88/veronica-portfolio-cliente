import React, { useState } from "react";

import { Link } from "react-router-dom";

export default function Dropdown({
  onClick,
  props: { navLinks, background, hoverBackground, linkColor, textHover },
}) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  return (
    <>
      <figure onClick={onClick}>
        <i className="fas fa-angle-down fa-2x logo-nav"></i>
      </figure>
      <ul style={{ background }}>
        {navLinks.map((eachLink, index) => {
          return (
            <li
              //   className={navOpen ? "" : "li-desactive"}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              style={{
                background: hoverIndex === index ? textHover || "#000" : "",
              }}
            >
              <Link style={{ color: linkColor }} key={index} to={eachLink.path}>
                {eachLink.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
