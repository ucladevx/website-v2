import React from 'react'
import classnames from 'classnames'

const PillItem = ({ children, onClick, fill, color }) => {
  const classNames = classnames('lib_pill-item', color, { fill })
  return (
    <div className={classNames} onClick={!fill ? onClick : null}>
      {children}
    </div>
  )
}

export default PillItem
