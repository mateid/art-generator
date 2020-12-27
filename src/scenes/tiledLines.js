import { randomGray, randomColor } from '../generators/primitives'

export default class TiledLines {
  draw = (ctx, x, y, side, width, height) => {
    const leftToRight = Math.random() >= 0.5
  
    ctx.beginPath()
    ctx.lineCap = 'square'
    ctx.lineWidth = 1
    ctx.strokeStyle = Math.random() > 0.99 ? randomColor() : randomGray(200)
  
    if (leftToRight) {
      ctx.moveTo(x, y)
      ctx.lineTo(x + side, y + side)
    } else {
      ctx.moveTo(x + side, y)
      ctx.lineTo(x, y + side)
    }
  
    ctx.stroke()
  }
  
  render = (ctx, width, height) => {
    const side = 25
  
    for (let x = 0; x < width; x += side) {
      for (let y = 0; y < height; y += side) {
        this.draw(ctx, x, y, side, width, height)
      }
    }
  }
}
