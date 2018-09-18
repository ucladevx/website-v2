import './main.scss'
import React from 'react'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import GA from './analytics/google-analytics'
import pages from './pages'

const App = () => (
  <HashRouter>
    <Fragment>
      {GA.init() && <GA.RouteTracker />}
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
    </Fragment>
  </HashRouter>
)

ReactDOM.render(<App />, document.getElementById('mount'))
