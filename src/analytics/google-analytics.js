import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import { Route } from 'react-router-dom'
import { analytics } from '../config'

class GoogleAnalytics extends React.Component {
  componentDidMount() {
    const {
      location: { pathname, search }
    } = this.props
    this.logPageChange(pathname, search)
  }

  componentDidUpdate({ location: prevLocation }) {
    const {
      location: { pathname, search }
    } = this.props
    const isDifferentPathname = pathname !== prevLocation.pathname
    const isDifferentSearch = search !== prevLocation.search

    if (isDifferentPathname || isDifferentSearch) {
      this.logPageChange(pathname, search)
    }
  }

  logPageChange(pathname, search = '') {
    const page = pathname + search
    const { location } = window
    ReactGA.set({
      page,
      location: `${location.origin}${page}`
    })
    ReactGA.pageview(page)
  }

  render() {
    return null
  }
}

GoogleAnalytics.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string
  }).isRequired
}

const RouteTracker = () => <Route component={GoogleAnalytics} />

const init = () => {
  const { options } = analytics.gaTracking
  const { trackingId } = analytics.gaTracking
  const isGAEnabled = !!trackingId

  if (isGAEnabled) {
    ReactGA.initialize(trackingId, options)
  }

  return isGAEnabled
}

export default {
  GoogleAnalytics,
  RouteTracker,
  init
}
