import React from "react";

import "./Hero.css";
import gif1 from "../assets/movn.gif";
import gif2 from "../assets/gif2.gif";
import Logo from "../assets/movn1.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        {" "}
        <div className="header">
          <img className="logo" src={Logo} alt=""></img>
          <ul className="header-menu"></ul>
        </div>
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Movn </span>
            <span>Active</span>
          </div>
          <div>
            <span>Life Style</span>
          </div>
          <div>Sports SuperAPP .</div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <img className="gif" src={gif1} alt=""></img>
        <img className="gif" src={gif2} alt=""></img>
        <img className="gif" src={gif1} alt=""></img>
        <img className="gif" src={gif2} alt=""></img>
      </div>
    </div>
  );
};

export default Hero;
