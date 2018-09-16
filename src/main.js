import './main.scss'
import React from 'react'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navbar from './navbar'
import Home from './pages/home'

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('mount'))
