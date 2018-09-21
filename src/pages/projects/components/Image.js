import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ path }) => {
  const Img = require(`images/productLogos/${path}`) // eslint-disable-line
  return (
    <div className="project_image" style={{ backgroundImage: `url(${Img})` }} />
  )
}

Image.propTypes = {
  path: PropTypes.string.isRequired
}

export default Image
