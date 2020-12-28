import './menu.scss'

import React, { useState } from 'react'
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave, faCog, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import allScenes from '../scenes/allScenes'
import { useImageData } from '../contexts/imageContext'

const Presets = ({ onClick }) => (
  <>
    {allScenes.map((scene) => (
      <DropdownItem key={scene.name} onClick={() => onClick(scene.renderer)}>
        {scene.name}
      </DropdownItem>
    ))}
  </>
)

const Saved = () => <DropdownItem disabled>{'- -'}</DropdownItem>

const Menu = ({ onSceneSelect, onPrefs, onRefresh }) => {
  const [isOpen, toggle] = useState(false)
  const imageData = useImageData()

  return (
    <div className="main-menu">
      <Button className={'mx-1'} title="Preferences" onClick={onPrefs}>
        <FontAwesomeIcon icon={faCog} /> Preferences
      </Button>

      <a href={imageData} download="scene.png">
        <Button className={'mx-1'} title="Save">
          <FontAwesomeIcon icon={faSave} /> Wallpaper
        </Button>
      </a>

      <Button className={'mx-1'} title="Refresh Scene" onClick={onRefresh}>
        <FontAwesomeIcon icon={faSyncAlt} /> Refresh
      </Button>

      <ButtonDropdown
        isOpen={isOpen}
        toggle={() => toggle(!isOpen)}
        className={'mx-1'}
      >
        <DropdownToggle caret>Select a Scene</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Preset Scenes</DropdownItem>
          <Presets onClick={onSceneSelect} />
          <DropdownItem divider />
          <DropdownItem header>Your Saved Scenes</DropdownItem>
          <Saved />
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  )
}

export default Menu
