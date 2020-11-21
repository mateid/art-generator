import React, { useState } from 'react'
import './App.css'
import Canvas from './canvas'
import Menu from './menu'

const App = () => {

  const [scene, setScene] = useState({ renderer: () => { }});
  const [preferences, setPreferences] = useState({});

  return <>
    <Menu
      onClick={renderer => setScene({renderer})}
      onPrefsClick={preferences => setPreferences(preferences)}
      onSaveClick={() => console.warn('Not implemented!')}
    />
    <Canvas render={scene.renderer} />
  </>
}

export default App;