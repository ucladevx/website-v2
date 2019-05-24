const team = [
  {
    title: 'Executive Board',
    people: [
      {
        name: 'Meera Rachamallu',
        role: 'President',
        email: 'mrachamallu@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/meera-rachamallu/',
          personal: 'http://meerarachamallu.me'
        }
      },
      {
        name: 'Terrence Ho',
        role: 'Internal VP',
        email: 'terrenceho.books@gmail.com',
        links: {
          linkedIn: 'https://www.linkedin.com/in/terrence-ho/'
        }
      },
      {
        name: 'Yifan You',
        role: 'External VP',
        email: 'harry473417@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/yifan-you/'
        }
      }
    ]
  },
  {
    title: 'Officer Board',
    people: [
      {
        name: 'April Guo',
        role: 'Director of Recruiting'
      },
      {
        name: 'Austin Telles',
        role: 'Director of Finance'
      },
      {
        name: 'Monetha Raghani',
        role: 'Director of Marketing'
      },
      {
        name: 'Samuel Lee',
        role: 'Director of Events/Operations',
        links: {
          linkedIn: 'https://www.linkedin.com/in/samuel-j-lee/'
        }
      },
      {
        name: 'Chaitanya Pedada',
        role: 'Technical Advisor'
      },
      {
        name: 'Aidan Wolk',
        role: 'Technical Advisor'
      },
      {
        name: 'Hirday Gupta',
        role: 'Technical Advisor'
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
