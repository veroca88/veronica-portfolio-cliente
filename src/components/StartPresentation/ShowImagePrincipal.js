import React from "react";

import { Link } from "react-router-dom";

import StartClick from "./images/click-black.png";
import Heart from "./images/heart-pixel.png";
// import StartClickColor from "./images/click-color.png";
import DoubleHeart from "./images/heart-doble-pixel.png";

export default function ShowImagePrincipal({ onClick }) {
  return (
    <Link onClick={onClick} to="/my-projects">
      <img className="hand-click" src={DoubleHeart} alt="heart" />
    </Link>
  );
}

{
  /* <img id="hand-click" src={StartClick} alt="hand-clicking" /> */
}
{
  /* <img id="hand-click" src={StartClickColor} alt="hand-clicking" /> */
}
{
  /* <img id="hand-click" src={Heart} alt="heart" /> */
}
