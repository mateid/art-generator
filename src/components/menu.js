import React from 'react'
import './menu.scss'

const Menu = props => (
  <div className='main-menu'>
    <button onClick={props.onClick}>Render</button>
  </div>
)

export default Menu