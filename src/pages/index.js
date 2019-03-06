import Home from './home'
import Recruitment from './recruitment'
import Projects from './projects'
import Team from './team'

const pageRoutes = {
  home: {
    component: Home,
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
  }
}

export default pageRoutes
