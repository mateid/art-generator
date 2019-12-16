import React, { useState } from 'react'
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faCog } from '@fortawesome/free-solid-svg-icons'
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

const Saved = () => <DropdownItem disabled>{'- -'}</DropdownItem>

const Menu = props => {
  const [isOpen, toggle] = useState(false)

  return (
    <div className="main-menu">
      <Button className={'mx-1'} onClick={props.onPrefsClick}>
        <FontAwesomeIcon icon={faCog} />
      </Button>
      <Button className={'mx-1'}>
        <FontAwesomeIcon icon={faSave} onClick={props.onSaveClick} />
      </Button>
      <ButtonDropdown
        isOpen={isOpen}
        toggle={() => toggle(!isOpen)}
        className={'mx-1'}
      >
        <DropdownToggle caret>Select a Scene</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Preset Scenes</DropdownItem>
          <Presets onClick={props.onClick} />
          <DropdownItem divider />
          <DropdownItem header>Your Saved Scenes</DropdownItem>
          <Saved />
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  )
}

export default Menu
