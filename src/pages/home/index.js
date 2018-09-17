import React from 'react'
import { Col, Pill, Ellipse, Section } from '../../lib'
import logo from 'images/logo.svg'

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
      <Section right blue>
        <Col>
          <h1>Our Initiative</h1>
          <h5>
            We focus on a wide variety of projects, but prioritize ventures that
            improve the college experience for UCLA students. Every quarter we
            will develop solutions for the most popular initiatives by the
            community. Submit your own requests for problems you're facing.
          </h5>
        </Col>
      </Section>
      <Section middle>
        <Col middle>
          <h1>Want to Apply?</h1>
          <h3>
            We accept applications in the Fall, Winter and Spring. All
            backgrounds and skill levels are welcome! Check out our Recruitment
            page to see how our process works.
          </h3>
        </Col>
      </Section>
    </div>
  </div>
)

export default Home
