import React from "react";
import backend from "images/backend-dev.svg";
import frontend from "images/frontend-dev.svg";
import mobile from "images/mobile-dev.svg";
import designer from "images/designer.svg";
import marketing from "images/marketing.svg";
import data from "images/data.svg";
import { Pill } from "../../../lib";

const TeamPanel = () => {
  return (
    <div className="panel">
      <section>
        <h2>Team Roles</h2>
        <br />
        <br />
        <h3>
          We know product development is a holistic process so we offer a range
          of roles below for inspiration, but feel free to craft your own:
        </h3>
        <br />
        <br />
        <div className="grid">
          <div className="role">
            <img src={backend} className="icon" />
            <h3 className="name">Backend Developer</h3>
            <p>
              Concerned with evolving a product’s business logic into robust
              backend services often in the form of developing APIs and
              designing database schema. Popular technologies include Node.js,
              Python, Go.{" "}
            </p>
          </div>
          <div className="role">
            <img src={frontend} className="icon" />
            <h3 className="name">Frontend Developer</h3>
            <p>
              Defines the product presentation by working with the designer to
              translate prototypes into a dynamic UI and integrating APIs.
              Popular frameworks include React, Angular and Vue along with
              HTML/CSS.
            </p>
          </div>
          <div className="role">
            <img src={mobile} className="icon" />
            <h3 className="name">Mobile Developer</h3>
            <p>
              Passionate about mobile platforms including iOS, Android and React
              Native. Will integrate APIs and translate design prototypes into
              code to create functional, native mobile applications.{" "}
            </p>
          </div>
          <div className="role">
            <img src={designer} className="icon" />
            <h3 className="name">Designer</h3>
            <p>
              Leading the visual design of the product. Teams typically have one
              designer who works on UI/UX wireframes often using Sketch or
              Figma. You will work closely with frontends to render your
              prototypes as well as the PM and marketing to design promotional
              material
            </p>
          </div>
          <div className="role">
            <img src={marketing} className="icon" />
            <h3 className="name">Marketing</h3>
            <p>
              Works closely with the PM and designer to establish a recognizable
              product brand. Expected to be resourceful and engage in user
              testing and demographic analysis. Finds new ways to reach and
              engage target audiences
            </p>
          </div>
          <div className="role">
            <img src={data} className="icon" />
            <h3 className="name">Data</h3>
            <p>
              This role and its expectations will vary depending on the data
              infrastructure in place in a product. Expected to generate
              consumable insights from raw data based on which team will
              reevaluate product strategy. Could use Python, R, Tableau, d3.js{" "}
            </p>
          </div>
        </div>
      </section>
      <section>
        <h2>Recruitment Process</h2>
        <br />
        <div className="grid">
          <div className="step">
            <div className="container-row">
              <div className="number-container">
                <div className="number">1</div>
              </div>
              <div className="text-container">
                <h3 className="name">Submit Online Application</h3>
                <p>
                  Tell us about your interests and how you think you can
                  contribute to DevX at TODO ADD LINK. We’ll be looking for your
                  resume and portfolio (if applicable).
                </p>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="container-row">
              <div className="number-container">
                <div className="number">2</div>
              </div>
              <div className="text-container">
                <h3 className="name">Initial Screening</h3>
                <p>
                  We will holistically evaluate applicants, looking for
                  experience and passion. Following this, some of you will
                  receive invites to Recruiting Night.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="container-row">
              <div className="number-container">
                <div className="number">3</div>
              </div>
              <div className="text-container">
                <h3 className="name">Recruiting Night</h3>
                <p>
                  This is your chance to impress teams and in turn for them to
                  impress you. It’s a hybrid between a social and networking
                  night and you can commit to teams of your choice.
                </p>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="container-row">
              <div className="number-container">
                <div className="number">4</div>
              </div>
              <div className="text-container">
                <h3 className="name">Final Decision</h3>
                <p>
                  PMs will send out emails formally welcoming successful
                  applicants. Welcome!{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamPanel;
