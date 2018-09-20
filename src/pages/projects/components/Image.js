import React from 'react'

const Image = ({ path }) => {
  const Img = require('images/productLogos/' + path)
  return (
    <div className="project_image">
      <img src={Img} />
    </div>
  )
}

export default Image
