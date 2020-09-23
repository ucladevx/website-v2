const team = [
  {
    title: 'Executive Board',
    people: [
      {
        name: 'Hirday Gupta',
        role: 'President',
        email: 'hirday@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/hirday-gupta/'
        }
      },
      {
        name: 'Dhruv Sharma',
        role: 'Internal VP',
        email: 'dhruv.sharma@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/dhruvsharma78/'
        }
      },
      {
        name: 'Aryan Arora',
        role: 'External VP',
        email: 'aryan.arora@ucla.edu',
        links: {
          linkedIn: 'https://linkedin.com/in/aryanarora0/'
        }
      }
    ]
  },
  {
    title: 'Officer Board',
    people: [
      {
        name: 'Lucy Huo',
        role: 'Director of Recruiting',
        email: 'lucendary@g.ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/lucy-huo/'
        }
      },
      {
        name: 'Anh Mac',
        role: 'Director of Operations',
        email: 'anhmvc@ucla.edu',
        links: {
          linkedIn: 'https://linkedin.com/in/anhmvc'
        }
      },
      {
        name: 'Samantha Garabedian',
        role: 'Director of Marketing',
        email: 'samg2@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/monetharaghani/'
        }
      },
      {
        name: 'Anika Murthy',
        role: 'Design Officer',
        email: 'anikamurthy2@gmail.com',
        links: {
          linkedIn: 'https://www.linkedin.com/in/anikamurthy/'
        }
      },
      {
        name: 'Narek Daduryan',
        role: 'Community Engagement Officer',
        email: 'narekdaduryan@gmail.com',
        links: {
          linkedIn: 'https://linkedin.com/in/ndaduryan'
        }
      },
      {
        name: 'Samuel Lee',
        role: 'Engineering Advisor',
        email: 'samlee.csit@gmail.com',
        links: {
          linkedIn: 'https://www.linkedin.com/in/samuel-j-lee/'
        }
      },
      {
        name: 'Matthew Pineda',
        role: 'Engineering Advisor',
        email: 'matthewpineda@ucla.edu',
        links: {
          linkedIn: 'https://linkedin.com/in/matthewpineda'
        }
      },
      {
        name: 'Yifan You',
        role: 'Product Advisor',
        email: 'harry473417@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/yifan-you/'
        }
      },
      {
        name: 'Shreya Chatterjee',
        role: 'Product Advisor',
        links: {
          linkedIn: 'https://www.linkedin.com/in/shreya-chatterjee-79700514b/'
        }
      }
    ]
  }
]

// Add images programmatically, ignoring ESLint errors about it since it's intentional
/* eslint-disable no-param-reassign, global-require, import/no-dynamic-require */
team.forEach(section => {
  section.people.forEach(person => {
    // Set each person's image URL to their image from the static/images/officers folder
    // which should be named firstname-lastname.JPG
    person.image = `/images/officers/${person.name
      .split(' ')
      .join('-')
      .toLowerCase()}.png`
  })
})

export default team
