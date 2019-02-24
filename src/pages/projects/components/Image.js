import React from 'react'
import PropTypes from 'prop-types'

const Image = ({ path }) => (
  <div className="project_image" style={{ backgroundImage: `url(${path})` }} />
)

Image.propTypes = {
  path: PropTypes.string.isRequired
}

export default Image
