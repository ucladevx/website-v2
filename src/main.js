import './main.scss'
import React from 'react'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Config from './config'

import GA from './analytics/google-analytics'
import Navbar from './navbar'
import pages from './pages'
import AppContainer from './pages/App'

GA.init()

class App extends React.Component {
  render() {
    return (
      <HashRouter onUpdate={() => window.scrollTo(0, 0)}>
        <AppContainer>
          <GA.RouteTracker />
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
  }
}

ReactDOM.render(<App />, document.getElementById('mount'))
