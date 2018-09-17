import React from 'react'
import classnames from 'classnames'

const Section = ({ children, right, left, middle, blue, small }) => {
  const classNames = classnames('lib_section', {
    right,
    blue,
    left,
    middle,
    small
  })
  return <div className={classNames}>{children}</div>
}

export default Section
