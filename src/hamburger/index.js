import React from 'react'
import Popup from 'reactjs-popup'
import Menu from './Menu'
import BurgerIcon from './BurgerIcon'

const Hamburger = () => {
  return (
    <Popup
      modal
      closeOnDocument={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
  )
}

export default Hamburger
