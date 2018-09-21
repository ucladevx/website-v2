import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Text = ({ children, left }) => {
  const className = classnames('projects_text', { left })
  return <div className={className}>{children}</div>
}

Text.propTypes = {
  children: PropTypes.oneOf([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
  left: PropTypes.bool
}

Text.defaultProps = {
  left: true
}

export default Text
