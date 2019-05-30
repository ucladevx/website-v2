import React from 'react'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'What is DevX',
    contents: [
      () =>
        `Have you ever felt that all you were learning at UCLA was theory, with
        little opportunities to build out practical applications?`,
      () =>
        `DevX is a brand new program dedicated to solving that very problem!
        Build out real-world projects to help tackle pressing problems
        frustrating the UCLA community, grow your technical skills by pairing up
        with experienced students, and build a network that lasts beyond
        graduation.`
    ]
  },
  {
    title: 'Our Initiative',
    contents: [
      () =>
        `We focus on a wide variety of projects, but prioritize ventures that
        improve the college experience for UCLA students.`,
      () => `Every quarter we will develop solutions for the most popular initiatives
        by the community. Submit your own requests for problems you're facing.`
    ]
  },
  {
    title: 'Want to Apply?',
    contents: [
      () => (
        <span>
          We accept applications in the Fall, Winter and Spring. All backgrounds
          and skill levels are welcome! Check out our{' '}
          {<Link to="/recruitment">Recruitment</Link>} page to see how our
          process works.
        </span>
      )
    ]
  }
]

export default { sections }
