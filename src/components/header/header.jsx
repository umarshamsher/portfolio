import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./headerSocials";

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Umar</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} className="me1" alt="me" />
        </div>

          <a href="#contact" className="scroll__down"> Scroll Down</a>
      </div>
    </header>
  );
}

export default header;
