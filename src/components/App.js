import React, { useState } from 'react'
import './App.css'
import Canvas from './canvas'
import Menu from './menu'

import { getPreferences, savePreferences } from '../services/preferences'
import emptyScene from '../scenes/emptyScene'
import useWindowSize from '../hooks/useWindowSize'
import { ImageContextProvider } from '../contexts/imageContext'

const App = () => {
  const [scene, setScene] = useState(emptyScene)
  const [height, width] = useWindowSize()
  const [preferences, setPreferences] = useState(getPreferences())

  const refreshScene = () => setScene({ ...scene })

  const handlePreferences = (preferences) => {
    savePreferences(preferences)
    setPreferences(preferences)
  }

  return (
    <ImageContextProvider>
      <Menu
        preferences={preferences}
        onSceneSelect={(scene) => setScene(scene)}
        onPrefs={handlePreferences}
        onRefresh={refreshScene}
      />
      <Canvas scene={scene} height={height} width={width} showMat={preferences.showMat} />
    </ImageContextProvider>
  )
}

export default App
