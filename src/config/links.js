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
  {
    label: 'HOME',
    type: 'internal',
    path: '/'
  },
  {
    label: 'RECRUITMENT',
    type: 'internal',
    path: '/recruitment'
  },
  {
    label: 'PROJECTS',
    type: 'internal',
    path: '/projects/spring18'
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
