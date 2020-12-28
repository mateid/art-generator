import React, { useState } from 'react'
import './App.css'
import Canvas from './canvas'
import Menu from './menu'

import emptyScene from '../scenes/emptyScene'
import useWindowSize from '../hooks/useWindowSize'
import { ImageContextProvider } from '../contexts/imageContext'

const App = () => {
  const [scene, setScene] = useState(emptyScene)
  const [height, width] = useWindowSize()
  const [preferences, setPreferences] = useState({})

  const refreshScene = () => setScene({ ...scene })

  return (
    <ImageContextProvider>
      <Menu
        onSceneSelect={(scene) => setScene(scene)}
        onPrefs={(preferences) => setPreferences(preferences)}
        onRefresh={refreshScene}
      />
      <Canvas
        scene={scene}
        height={height}
        width={width}
      />
    </ImageContextProvider>
  )
}

export default App
