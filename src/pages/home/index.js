import React from "react";
import { Col, Pill, Ellipse } from "../../lib";
import logo from "images/logo.svg";

const Home = () => (
  <div className="home-container">
    <div className="heading">
      <div className="ellipse-container">
        <Ellipse />
      </div>
      <div className="content">
        <Col>
          <img src={logo} />
          <h3>MOONSHOTS FOR UCLA</h3>
          <Pill>JOIN US</Pill>
        </Col>
      </div>
    </div>
    <div className="what-is-container">What the fuck</div>
  </div>
);

export default Home;
