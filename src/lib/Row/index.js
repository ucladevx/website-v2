import React from 'react'
import classnames from 'classnames'

const Row = ({ children, maxHeight, spaceBetween }) => {
  const className = classnames('lib_row', { 'max-height': maxHeight, 'space-between': spaceBetween })
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Row
