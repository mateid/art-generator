import React, { useState } from 'react'
import './App.css'
import Canvas from './canvas'
import Menu from './menu'

import emptyScene from '../scenes/emptyScene'
import useWindowSize from '../hooks/useWindowSize'

const App = () => {
  const [scene, setScene] = useState(emptyScene)
  const [height, width] = useWindowSize()
  const [preferences, setPreferences] = useState({})

  const newLocal = () => setScene({ ...scene })
  return (
    <>
      <Menu
        onSceneSelect={(scene) => setScene(scene)}
        onPrefs={(preferences) => setPreferences(preferences)}
        onSave={() => console.warn('Not implemented!')}
        onRefresh={newLocal}
      />
      <Canvas scene={scene} height={height} width={width} />
    </>
  )
}

export default App
