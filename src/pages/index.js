import HomePage from './HomePage'
import Recruitment from './recruitment'
import Projects from './projects'
import DocsPage from './DocsPage'
import Team from './team'

const pageRoutes = {
  home: {
    component: HomePage,
    path: '/',
    exact: true
  },
  recruitment: {
    component: Recruitment,
    path: '/recruitment',
    exact: true
  },
  projects: {
    component: Projects,
    path: '/projects/:year(spring18)',
    exact: true
  },
  team: {
    component: Team,
    path: '/team',
    exact: true
  },
  docs: {
    component: DocsPage,
    path: '/docs',
    exact: true
  }
}

export default pageRoutes
