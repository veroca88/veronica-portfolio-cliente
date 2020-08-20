import React from "react";
import StartClickColor from "./click-color.png";

export default function Myprojects() {
  return (
    <section id="wrapper" className="skewed">
      <div className="layer bottom">
        <div className="content-wrap">
          <div className="content-body">
            <h1>Hey! I'm Veronica and I'm a Web Developer</h1>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
              ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
              ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
            </p>
          </div>
          <img src={StartClickColor} alt="hand pointig" />
        </div>
      </div>

      <div className="layer top">
        <div className="content-wrap">
          <div className="content-body">
            <h1>Hey! I'm Veronica and I'm a Web Developer</h1>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
              ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem
              ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsumLorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
            </p>
          </div>
        </div>
      </div>

      <div className="handle"></div>
    </section>
  );
}
