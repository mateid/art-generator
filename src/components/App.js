import React, { Component } from 'react'
import './App.css'
import Canvas from './canvas'
import Menu from './menu'
import { UserContext, UserProvider } from '../contexts/userContext'
import { getPreferences, setPreferences } from '../services/preferences'

export default class App extends Component {
  static contextType = UserContext

  constructor(props) {
    super(props)

    this.state = {
      renderFunction: () => {},
      preferences: getPreferences()
    }

    this.handleClick = this.handleClick.bind(this)
    this.handlePrefsClick = this.handlePrefsClick.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
  }

  handleClick(scene) {
    this.setState({
      ...this.state,
      renderFunction: scene
    })
  }

  handlePrefsClick() {
    this.setState({
      ...this.state,
      preferences: { frame: !this.state.preferences.frame}
    })
    setPreferences(this.state.preferences)
  }

  handleSaveClick() {
    console.log('Not implemented')
  }

  render() {
    return (
      <UserProvider value={this.state.preferences}>
        <Menu
          onClick={this.handleClick}
          onPrefsClick={this.handlePrefsClick}
          onSaveClick={this.handleSaveClick}
        />
        <Canvas render={this.state.renderFunction} />
      </UserProvider>
    )
  }
}
