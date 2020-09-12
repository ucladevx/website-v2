/**
 * Each link has shape:
 *  {
 *    label: string
 *    // The label that shows up on navbar/menu
 *
 *    type: 'internal' | 'external'
 *    // Whether the link is internal (React-Router-handled) or external (<a/> tag-handled)
 *
 *    path: string
 *    // The url for the link
 *  }
 */

export default [
  // {
  //   label: 'DEMO DAY',
  //   type: 'internal',
  //   path: '/demoday'
  // },
  {
    label: 'RECRUITMENT',
    type: 'internal',
    path: '/recruitment'
  },
  {
    label: 'PROJECTS',
    type: 'internal',
    path: '/projects/winter20'
  },
  {
    label: 'TEAM',
    type: 'internal',
    path: '/team'
  },
  {
    label: 'DOCS',
    type: 'internal',
    path: '/docs'
  }
]
