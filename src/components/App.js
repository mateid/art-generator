import React, { Component } from 'react'
import './App.css'
import Canvas from './canvas'
import Menu from './menu'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      renderFunction: () => {}
    }

    this.handleClick = this.handleClick.bind(this)
    this.draw = this.draw.bind(this)
  }

  draw = (x, y, width, height, ctx) => {
    const leftToRight = Math.random() >= 0.5
    ctx.beginPath()
    if (leftToRight) {
      ctx.moveTo(x, y)
      ctx.lineTo(x + width, y + height)
    } else {
      ctx.moveTo(x + width, y)
      ctx.lineTo(x, y + height)
    }

    ctx.stroke()
  }

  handleClick() {
    this.setState({
      renderFunction: (ctx, width, height) => {
        const step = 50
        ctx.lineCap = 'square'
        ctx.lineWidth = 1

        console.log('Rendering!', width, height)
        for (var x = 0; x < width; x += step) {
          for (var y = 0; y < height; y += step) {
            console.log('Drawing!')
            this.draw(x, y, step, step, ctx)
          }
        }
      }
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
