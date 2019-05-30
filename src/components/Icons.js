import React from 'react'
import styled from 'styled-components'

import Row from './Row'
import RowItem from './RowItem'
import { socialLinks } from '../config'

const IconsRow = styled.div`
  width: 200px;
  margin-bottom: 24px;

  img {
    width: 33px;
  }
`

const Icons = () => (
  <IconsRow>
    <Row spaceBetween>
      {socialLinks.map(socialLink => (
        <RowItem key={socialLink.icon}>
          <a target="_blank" rel="noopener noreferrer" href={socialLink.url}>
            <img alt="icon.url" src={socialLink.icon} />
          </a>
        </RowItem>
      ))}
    </Row>
  </IconsRow>
)

export default Icons
