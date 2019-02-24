import React from 'react'

import pmIcon from '../../../assets/images/product-manager.svg'
import RecruitmentSection from './RecruitmentSection'

const PMPanel = () => (
  <div className="panel">
    <section>
      <h2>Product Manager</h2>
      <br />
      <br />
      <div className="jumbo">
        <div className="text-container">
          <h5>
            PMs are primarily engaged with product vision, strategy and
            management. They may be hands-on developers or designers too, but
            their prime concern is designing new, innovative product features
            and brainstorming ways to enhance the user experience. The specific
            implementations of these ideas would then be delegated to team
            members. They also typically organize the sprint and deployment
            schedules as well as the overarching roadmap.
          </h5>
          <br />
          <h5>
            If you’re excited at the prospect of converting your own cool idea
            into a robust product, apply to be PM and we’ll be in touch!
          </h5>
        </div>
        <div className="img-container">
          <img src={pmIcon} alt="pm-logo" />
        </div>
      </div>
    </section>
    <RecruitmentSection type="pm" />
  </div>
)

export default PMPanel
