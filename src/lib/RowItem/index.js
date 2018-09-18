import React from 'react'
import classnames from 'classnames'

const RowItem = ({ children, className, style }) => {
  const classNames = classnames('lib_row-item', className)
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  )
}

export default RowItem
