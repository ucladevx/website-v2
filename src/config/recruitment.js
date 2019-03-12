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

const unifiedDates = [
  {
    name: 'Application Release',
    type: 'single',
    value: new Date('March 14, 2019'),
    detail: 'Winter, Thursday of Week 10'
  },
  {
    name: 'Application Deadline',
    type: 'single',
    value: new Date('April 2, 2019'),
    detail: 'Spring, Tuesday of Week 1'
  },
  {
    name: 'Recruiting Night',
    type: 'single',
    value: new Date('April 4, 2019'),
    detail: 'Spring, Thursday of Week 1'
  }
]

const recruitment = {
  pm: {
    applicationLink: null,
    // applicationLink: 'https://ucladevx.com/l/application'
    dates: unifiedDates,
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
    applicationLink: null,
    // applicationLink: 'https://ucladevx.com/l/application'
    dates: unifiedDates,
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
          'We will holistically evaluate applicants, looking for experience and passion. Following this, some of you will receive invites to Recruiting Night.'
      },
      {
        step: '3',
        name: 'Recruiting Night',
        description:
          'This is your chance to impress teams and in turn for them to impress you. It’s a hybrid between a social and networking night and you can commit to teams of your choice.'
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
