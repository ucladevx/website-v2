export default {
  links: [
    {
      label: 'HOME',
      path: '/'
    },
    {
      label: 'RECRUITMENT',
      path: '/recruitment'
    },
    {
      label: 'PROJECTS',
      path: '/projects/spring18'
    }
  ],
  icons: [
    {
      path: 'fb.svg',
      url: 'https://www.facebook.com/ucladevx/'
    },
    {
      path: 'mail.svg',
      url: 'mailto:hello@ucladevx.com'
    },
    {
      path: 'medium.svg',
      url: 'https://www.medium.com/ucladevx'
    },
    {
      path: 'github.svg',
      url: 'https://www.github.com/ucladevx/'
    }
  ],
  team: [
    {
      title: 'Executive Board',
      people: [
        {
          name: 'Ram Goli',
          role: 'President',
          linkedin: 'https://linkedin.com/in/ramsgoli',
          email: 'mailto::ramsgoli@ucla.edu'
        }
      ]
    }
  ],
  products: {
    spring18: [
      {
        name: 'Bruin Bite',
        description:
          'Bringing Bruins together one bite at a time!\n\nWith the ease of a few button pushes, Bruin Bite, matches you with new people to eat with at the dining halls! Our goal is to bring you an app that makes meeting fellow Bruins effortless.',
        image: 'bruin_bite.png'
      },
      {
        name: 'BruinMeet',
        description:
          'BruinMeet is a UCLA-exclusive dating app aimed at getting people off the app and into the date. We love love <3',
        image: 'bruinmeet.jpg'
      },
      {
        name: 'BruinHub',
        description:
          'BruinHub is a personalizable web app designed to help Bruins weather the challenges of the UCLA quarter system. Coupled with our chrome extension and event scheduler, we aim to empower you to get the most out of your quarter',
        image: 'bruin_hub.png'
      },
      {
        name: 'Bquest',
        description:
          'Bquest is a peer-to-peer platform that helps UCLA students find the right major. On Bquest undecided or undeclared UCLA students can find ambassadors from the majors they are interested in. Ambassadors share their personal experience and give students an insight into their major. This information can help students make good decisions.',
        image: 'bquest.png'
      },
      {
        name: 'Mappening',
        description:
          'Mappening is a web app that aggregates events across the UCLA campus onto a single highly visual map to minimize search effort and promote discovery. Our app allows students to browse through events happening near or on campus and explore everything UCLA has to offer.',
        image: 'mappening.png'
      },
      {
        name: 'StudySmart',
        description:
          "StudySmart gives students instant access to all the information they need about the best study spots on campus. Whether it's how busy a library is, what time the Hedrick Study closes, or where to reserve a YRL pod, all the answers are found in a single application that is updated in real-time. Spare yourself the stress - StudySmart!",
        image: 'study_smart.png'
      },
      {
        name: 'Bpool',
        description:
          'BPool aims to be the next iteration in UCLA ridesharing, looking to simplify and streamline the ability for Bruins to get from point A to point B. Focused on providing a simple user interface and all in one integrated web application, we believe BPool to be the future of long distance carpooling.',
        image: 'bpool.png'
      }
    ]
  },
  gaTracking: {
    trackingId: 'UA-125060783-1',
    options: {
      debug: process.env.NODE_ENV !== 'production'
    }
  }
}
