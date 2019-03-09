import React from 'react'
import classnames from 'classnames'

const Pill = ({ children, outline }) => {
  const className = classnames('lib_pill', outline)
  return <div className={className}>{children}</div>
}

export default Pill
