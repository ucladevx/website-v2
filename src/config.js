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
        name: 'BruinHub',
        description:
          'BruinHub is a personalizable web app designed to help Bruins weather the challenges of the UCLA quarter system. Coupled with our chrome extension and event scheduler, we aim to empower you to get the most out of your quarter',
        image: 'bruin_hub.png'
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
