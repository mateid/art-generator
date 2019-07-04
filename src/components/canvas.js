import React, { Component } from 'react'
import './canvas.scss'

export default class Canvas extends Component {
  constructor(props) {
    super(props)
    this.canvas = React.createRef()
  }

  clear(ctx) {
    ctx.save()
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.clearRect(0, 0, this.canvas.current.width, this.canvas.current.height)
    ctx.restore()
  }

  renderScene() {
    const ctx = this.canvas.current.getContext('2d')
    this.clear(ctx)
    setTimeout(
      () =>
        this.props.render(
          ctx,
          this.canvas.current.width,
          this.canvas.current.height
        ),
      0
    )
  }

  componentDidMount() {
    const dpr = window.devicePixelRatio
    this.canvas.current.width = window.innerWidth * dpr
    this.canvas.current.height = window.innerHeight * dpr
    const ctx = this.canvas.current.getContext('2d')

    ctx.scale(dpr, dpr)
  }

  componentDidUpdate() {
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
