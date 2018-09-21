import Home from './home'
import Recruitment from './recruitment'
import Projects from './projects'

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
  }
}

export default pageRoutes
