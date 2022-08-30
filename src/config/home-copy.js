import React from 'react'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'What is DevX',
    contents: [
      () =>
        `DevX is a student organization dedicated to providing UCLA students
        with the opportunity to create practical applications.`,
      () =>
        `We comprise of several project teams building out real-world
        projects to help tackle pressing problems frustrating the UCLA
        community and beyond. We welcome people of all backgrounds
        including engineering, technology, management, marketing, design
        and much more. `
    ]
  },
  {
    title: 'Our Initiative',
    contents: [
      () =>
        `Make your ideas come to life, grow your technical
        skills by pairing up with experienced students, and build a network
        that lasts beyond graduation.`,
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
