import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'

import GA from './analytics/google-analytics'
import Navbar from './components/navbar'
import HamburgerMenu from './components/hamburger'
import pages from './pages'
import AppContainer from './pages/App'
import { typography } from './styles'

GA.init()

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${typography.baseFont};
  }

  button {
    font-family: ${typography.baseFont};
  }
`

const App = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <AppContainer>
      <GlobalStyle />
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
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('mount'))
