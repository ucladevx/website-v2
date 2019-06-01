import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { rgba } from 'polished'

import GA from './analytics/google-analytics'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import pages from './pages'
import AppContainer from './App'
import { colors, typography } from './styles'

GA.init()

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${typography.baseFont};
  }

  button {
    font-family: ${typography.baseFont};
  }

  ::-webkit-scrollbar {
      width: 1px;
      height: 1px;
  }
  ::-webkit-scrollbar-track {
      background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
      background-color: ${rgba(colors.white, 0.4)};
      border-radius: 3px;
  }
`

const theme = {
  logoSrc: '/images/logo.svg'
}

const App = () => (
  <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
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
        <Footer />
      </AppContainer>
    </ThemeProvider>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('mount'))
