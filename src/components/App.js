import React, { Component } from 'react'
import './App.css'
import Canvas from './canvas'
import Menu from './menu'
import { cubicDisarray, tiledLines, randomLines } from '../scenes'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      renderFunction: () => {}
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState({
      renderFunction: randomLines
    })
  }

  render() {
    return (
      <>
        <Menu onClick={this.handleClick} />
        <Canvas render={this.state.renderFunction} />
      </>
    )
  }
}
