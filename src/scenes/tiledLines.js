import { randomGray, randomColor } from '../generators/primitives'

export default class TiledLines {
  constructor(side = 50) {
    this.side = side
  }

  draw = (ctx, x, y, width, height) => {
    const leftToRight = Math.random() >= 0.5

    ctx.beginPath()
    ctx.lineCap = 'square'
    ctx.lineWidth = 25
    ctx.strokeStyle = Math.random() > 0.99 ? randomColor() : randomGray(200)

    if (leftToRight) {
      ctx.moveTo(x, y)
      ctx.lineTo(x + this.side, y + this.side)
    } else {
      ctx.moveTo(x + this.side, y)
      ctx.lineTo(x, y + this.side)
    }

    ctx.stroke()
  }

  render = (ctx, width, height) => {
    for (let x = 0; x < width; x += this.side) {
      for (let y = 0; y < height; y += this.side) {
        this.draw(ctx, x, y, width, height)
      }
    }
  }
}
