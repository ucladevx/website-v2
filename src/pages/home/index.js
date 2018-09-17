import React from "react";
import { Col, Pill, Ellipse, Section } from "../../lib";
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
          <Pill fill white>
            <div>JOIN US</div>
          </Pill>
        </Col>
      </div>
    </div>
    <div className="what-is-container">
      <Section left>
        <Col>
          <h1>What is DevX</h1>
          <h5>
            Have you ever felt that all you were learning at UCLA was theory,
            with little opportunities to build out practical applications? DevX
            is a brand new program dedicated to solving that very problem! Build
            out real-world projects to help tackle pressing problems frustrating
            the UCLA community, grow your technical skills by pairing up with
            experienced students, and build a network that lasts beyond
            graduation.
          </h5>
        </Col>
      </Section>
    </div>
  </div>
);

export default Home;
