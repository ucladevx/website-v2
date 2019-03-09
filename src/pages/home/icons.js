import React from 'react'
import Row from '../../components/lib/Row'
import RowItem from '../../components/lib/RowItem'
import { socialLinks } from '../../config'

const Icons = () => (
  <div className="icons-row">
    <Row spaceBetween>
      {socialLinks.map(socialLink => (
        <RowItem key={socialLink.icon}>
          <a target="_blank" rel="noopener noreferrer" href={socialLink.url}>
            <img alt="icon.url" src={socialLink.icon} />
          </a>
        </RowItem>
      ))}
    </Row>
  </div>
)

export default Icons
