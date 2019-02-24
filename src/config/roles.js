import backendDevIcon from '../assets/images/backend-dev.svg'
import frontendDevIcon from '../assets/images/frontend-dev.svg'
import mobileDevIcon from '../assets/images/mobile-dev.svg'
import marketingIcon from '../assets/images/marketing.svg'
import dataIcon from '../assets/images/data.svg'
import designerIcon from '../assets/images/designer.svg'

const roles = {
  pm: {},
  team: [
    {
      name: 'Backend Developer',
      icon: backendDevIcon,
      description:
        'Concerned with evolving a product’s business logic into robust backend services often in the form of developing APIs and designing database schema. Popular technologies include Node.js, Python, Go.'
    },
    {
      name: 'Frontend Developer',
      icon: frontendDevIcon,
      description:
        'Defines the product presentation by working with the designer to translate prototypes into a dynamic UI and integrating APIs. Popular frameworks include React, Angular and Vue along with HTML/CSS.'
    },
    {
      name: 'Mobile Developer',
      icon: mobileDevIcon,
      description:
        'Passionate about mobile platforms including iOS, Android and React Native. Will integrate APIs and translate design prototypes into code to create functional, native mobile applications.'
    },
    {
      name: 'Designer',
      icon: designerIcon,
      description:
        'Leading the visual design of the product. Teams typically have one designer who works on UI/UX wireframes often using Sketch or Figma. You will work closely with frontends to render your prototypes as well as the PM and marketing to design promotional material'
    },
    {
      name: 'Marketing',
      icon: marketingIcon,
      description:
        'Works closely with the PM and designer to establish a recognizable product brand. Expected to be resourceful and engage in user testing and demographic analysis. Finds new ways to reach and engage target audiences'
    },
    {
      name: 'Data',
      icon: dataIcon,
      description:
        'This role and its expectations will vary depending on the data infrastructure in place in a product. Expected to generate consumable insights from raw data based on which team will reevaluate product strategy. Could use Python, R, Tableau, d3.js'
    }
  ]
}

export default roles
