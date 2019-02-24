import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { sponsorship } from '../../config'
import { Col, Section } from '../../lib'
import Icons from './icons'
import JoinUs from './joinUs'

const Home = () => (
  <div className="home-container">
    <div className="heading">
      <div className="content">
        <Col>
          <img alt="DevX logo" src={logo} />
          <h3>MOONSHOTS FOR UCLA</h3>
          <JoinUs />
        </Col>
      </div>
    </div>
    <div className="what-is-container">
      <Section left>
        <Col>
          <h1>What is DevX</h1>
          <h5>
            Have you ever felt that all you were learning at UCLA was theory,
            with little opportunities to build out practical applications?
            <br />
            <br />
            DevX is a brand new program dedicated to solving that very problem!
            Build out real-world projects to help tackle pressing problems
            frustrating the UCLA community, grow your technical skills by
            pairing up with experienced students, and build a network that lasts
            beyond graduation.
          </h5>
        </Col>
      </Section>
      <Section right blue>
        <Col>
          <h1>Our Initiative</h1>
          <h5>
            We focus on a wide variety of projects, but prioritize ventures that
            improve the college experience for UCLA students.
            <br />
            <br />
          </h5>
          <h5>
            {`Every quarter we will develop solutions for the most popular
            initiatives by the community. Submit your own requests for problems
            you're facing.`}
          </h5>
        </Col>
      </Section>
      <Section middle>
        <Col middle>
          <h1>Want to Apply?</h1>
          <h3>
            We accept applications in the Fall, Winter and Spring. All
            backgrounds and skill levels are welcome! Check out our{' '}
            <Link to="/recruitment">Recruitment</Link> page to see how our
            process works.
          </h3>
        </Col>
      </Section>
    </div>
    <div className="footer-container">
      <Section middle blue small>
        <Col middle>
          <img alt="DevX logo" src={logo} className="logo" />
          <h5>
            Want to help one of the most influential organizations at UCLA?{' '}
            <a
              href={sponsorship.brochureLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsor Us
            </a>
            .
          </h5>
          <Icons />
          <p>Copyright © 2018 UCLA DevX</p>
        </Col>
      </Section>
    </div>
  </div>
)

export default Home
