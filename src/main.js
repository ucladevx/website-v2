import './main.scss'
import React from 'react'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './navbar'
import pages from './pages'

const App = () => (
  <BrowserRouter>
    <Fragment>
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
      </Switch>
    </Fragment>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('mount'))
