import React from 'react'
import Config from '../../config'
import { Row, RowItem } from 'lib'

const Icons = () => {
  const icons = Config.icons.map(icon => {
    const Img = require('images/' + icon.path)
    return (
      <RowItem>
        <a target="_blank" href={icon.url}>
          <img src={Img} />
        </a>
      </RowItem>
    )
  })

  return (
    <div className="icons-row">
      <Row spaceBetween>{icons}</Row>
    </div>
  )
}

export default Icons
