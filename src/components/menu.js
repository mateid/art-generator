import React, { useState } from 'react'
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import allScenes from '../scenes/allScenes'
import './menu.scss'

const Presets = props => (
  <>
    {allScenes.map(scene => (
      <DropdownItem
        key={scene.name}
        onClick={() => props.onClick(scene.renderer)}
      >
        {scene.name}
      </DropdownItem>
    ))}
  </>
)

const Menu = props => {
  const [isOpen, toggle] = useState(false)
  return (
    <div className="main-menu">
      <ButtonDropdown isOpen={isOpen} toggle={() => toggle(!isOpen)}>
        <DropdownToggle caret>Select a Scene</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Preset Scenes</DropdownItem>
          <Presets onClick={props.onClick} />
          <DropdownItem divider />
          <DropdownItem header>Your Saved Scenes</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  )
}

export default Menu
