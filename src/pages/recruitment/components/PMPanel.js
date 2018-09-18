import React from 'react'

import RecruitmentSection from './RecruitmentSection'
import pm from 'images/product-manager.svg'

const PMPanel = () => {
  return (
    <div className="panel">
      <section>
        <h2>Product Manager</h2>
        <br />
        <br />
        <div className="jumbo">
          <div className="text-container">
            <h3>
              PMs are primarily engaged with product vision, strategy and
              management. They may be hands-on developers or designers too, but
              their prime concern is designing new, innovative product features
              and brainstorming ways to enhance the user experience. The
              specific implementations of these ideas would then be delegated to
              team members. They also typically organize the sprint and
              deployment schedules as well as the overarching roadmap.
            </h3>
            <br />
            <h3>
              If you’re excited at the prospect of converting your own cool idea
              into a robust product, apply to be PM and we’ll be in touch!
            </h3>
          </div>
          <div className="img-container">
            <img src={pm} />
          </div>
        </div>
        <br />
        <br />
      </section>
      <RecruitmentSection type="pm" />
    </div>
  )
}

export default PMPanel
