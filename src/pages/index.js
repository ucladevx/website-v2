import HomePage from './HomePage'
import DemoDay from './DemoDayPage'
import RecruitmentPage from './RecruitmentPage'
import Projects from './ProjectsPage'
import DocsPage from './DocsPage'
import Team from './TeamPage'

const pageRoutes = {
  home: {
    component: HomePage,
    path: '/',
    exact: true
  },
  demoday: {
    component: DemoDay,
    path: '/demoday',
    exact: true
  },
  recruitment: {
    component: RecruitmentPage,
    path: '/recruitment',
    exact: false
  },
  projects: {
    component: Projects,
    path: '/projects/:year(winter20)',
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
