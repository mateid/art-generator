import React, { Component } from 'react'
import './canvas.scss'

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  renderScene() {
    const ctx = this.canvas.current.getContext('2d')
    this.props.render(
      ctx,
      this.canvas.current.width,
      this.canvas.current.height
    )
  }

  componentDidMount() {
    const dpr = window.devicePixelRatio
    this.canvas.current.width = window.innerWidth * dpr
    this.canvas.current.height = window.innerHeight * dpr
    const ctx = this.canvas.current.getContext('2d')

    ctx.scale(dpr, dpr)
  }

  componentDidUpdate(prevProps) {
    this.renderScene()
  }

  render() {
    return (
      <div className="frame">
        <canvas ref={this.canvas} className="main-canvas" />
      </div>
    )
  }
}
