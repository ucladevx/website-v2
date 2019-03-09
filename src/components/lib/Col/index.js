import React from 'react'
import classnames from 'classnames'

const Col = ({ children, middle }) => {
  const classNames = classnames('lib_col', { middle })
  return <div className={classNames}>{children}</div>
}

export default Col
