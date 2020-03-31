/**
 * Dates should be of the type
 * {
 *  name: string,
 *  type: 'single',
 *  value: Date,
 *  detail?: string
 * }
 * OR
 * {
 *   name: string,
 *   type: 'range',
 *   from: Date,
 *   to: Date,
 *   detail?: string
 * }
 */

const teamDates = [
  {
    name: 'Application Release',
    type: 'single',
    value: new Date('March 31, 2020'),
    detail: 'Spring, Tuesday Week 1'
  },
  {
    name: 'Application Deadline',
    type: 'single',
    value: new Date('April 6, 2020'),
    detail: 'Spring, Monday Week 2'
  }
]

const pmDates = [
  {
    name: 'Application Release',
    type: 'single',
    value: new Date('July 22, 2019'),
    detail: ''
  },
  {
    name: 'Application Deadline',
    type: 'single',
    value: new Date('August 11, 2019'),
    detail: ''
  },
  {
    name: 'Decision Release',
    type: 'single',
    value: new Date('September 1, 2019'),
    detail: ''
  }
]

export const APPLICATION_LINK = 'https://ucladevx.com/l/app'
export const DEV_APPLICATION_LINK = 'https://ucladevx.com/l/spring_app'

const recruitment = {
  quarter: 'Spring 2020',
  applicationLink: APPLICATION_LINK,
  pm: {
    isOpen: false,
    applicationLink: APPLICATION_LINK,
    dates: pmDates,
    process: [
      {
        step: '1',
        name: 'Submit Online Application',
        description:
          'Tell us about your experience and interest in product development. We’ll be looking for your resume and portfolio.'
      },
      {
        step: '2',
        name: 'Board Review',
        description:
          'We will holistically evaluate applicants, looking for experience and passion. Following this, some of you will receive an invite for an interview.'
      },
      {
        step: '3',
        name: 'Interview',
        description:
          'This is our opportunity to evaluate mutual fit. We’re interested in the ideas that you have but we’re even more interested in your skillset and process.'
      },
      {
        step: '4',
        name: 'Final Decisions',
        description:
          'Successful applicants will receive an email invite from us. Welcome to DevX!'
      }
    ]
  },
  team: {
    isOpen: true,
    applicationLink: DEV_APPLICATION_LINK,
    dates: teamDates,
    process: [
      {
        step: '1',
        name: 'Submit Online Application',
        description:
          'Tell us about your interests and how you think you can contribute to DevX. We’ll be looking for your resume and portfolio (if applicable).'
      },
      {
        step: '2',
        name: 'Initial Screening',
        description:
          'We will holistically evaluate applicants, looking for experience and passion.'
      },
      {
        step: '3',
        name: 'Team Interviews',
        description:
          'This is your chance to impress teams and in turn for them to impress you. Teams that you indicated interest in on your application may reach out to contact you.'
      },
      {
        step: '4',
        name: 'Final Decisions',
        description:
          'PMs will send out emails formally welcoming successful applicants. Welcome!'
      }
    ]
  }
}

export default recruitment
