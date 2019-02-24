import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import GA from './analytics/google-analytics'
import Navbar from './navbar'
import HamburgerMenu from './hamburger'
import pages from './pages'
import AppContainer from './pages/App'

GA.init()

const App = () => (
  <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
    <AppContainer>
      <GA.RouteTracker />
      <HamburgerMenu />
      <Navbar />
      <Switch>
        {Object.keys(pages).map(pageKey => {
          const { component, path, exact } = pages[pageKey]

          const routeProps = {
            component,
            path,
            exact
          }

          return <Route key={path} {...routeProps} />
        })}
        <Redirect to="/" />
      </Switch>
    </AppContainer>
  </HashRouter>
)

ReactDOM.render(<App />, document.getElementById('mount'))
