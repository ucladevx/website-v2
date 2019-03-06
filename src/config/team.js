const team = [
  {
    title: 'Executive Board',
    people: [
      {
        name: 'Ram Goli',
        role: 'President',
        email: 'ramsgoli@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/ramsgoli'
        }
      },
      {
        name: 'Karen Fann',
        role: 'Internal VP',
        email: 'kfann285@gmail.com',
        links: {
          linkedIn: 'https://www.linkedin.com/in/karen-fann/',
          personal: 'https://www.karenfann.com'
        }
      },
      {
        name: 'Ayush Patel',
        role: 'External VP | Director of Product',
        email: 'ayushp@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/ayushpatel34/'
        }
      }
    ]
  },
  {
    title: 'Officer Board',
    people: [
      {
        name: 'Bibek Ghimire',
        role: 'Director of Bootcamp',
        email: 'bibekg@ucla.edu',
        links: {
          linkedIn: 'https://linkedin.com/id/bibekg',
          personal: 'https://bibekg.com/'
        }
      },
      {
        name: 'Jorge Fuentes',
        role: 'Tech Advisor',
        email: 'jsjfuentes@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/jsfuentes'
        }
      },
      {
        name: 'Yifan You',
        role: 'Director of Marketing',
        email: 'harry473417@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/yifan-you/'
        }
      },
      {
        name: 'Chaitanya Pedada',
        role: 'Director of Bootcamp',
        email: 'chaitanya.pedada@gmail.com',
        links: {
          linkedIn: 'https://www.linkedin.com/in/chaitanya-pedada-5896b1147/'
        }
      },
      {
        name: 'Meera Rachamallu',
        role: 'Director of Finance',
        email: 'mrachamallu@ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/meera-rachamallu/',
          personal: 'http://meerarachamallu.me'
        }
      },
      {
        name: 'Nidhi Bhanu',
        role: 'Director of Design',
        email: 'nidhib@g.ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/nidhi-bhanu/',
          personal: 'https://www.nidhibhanu.com/'
        }
      },
      {
        name: 'Sharon John',
        role: 'Director of Recruiting',
        email: 'sharonjohn@g.ucla.edu',
        links: {
          linkedIn: 'https://www.linkedin.com/in/sharon-john/'
        }
      },
      {
        name: 'Terrence Ho',
        role: 'Director of Bootcamp',
        email: 'terrenceho.books@gmail.com',
        links: {
          linkedIn: 'https://www.linkedin.com/in/terrence-ho/'
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
