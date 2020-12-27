import { randomInt, randomGray, randomColor } from '../generators/primitives'

export default class RandomLines {
  draw = (ctx, width, height) => {
    ctx.beginPath()
    ctx.lineWidth = randomInt(7)
    ctx.strokeStyle = Math.random() > 0.99 ? randomColor() : randomGray()
    ctx.moveTo(randomInt(width), 0)
    ctx.lineTo(0, randomInt(height))
    ctx.stroke()
  }
  
  render = (ctx, width, height) => {
    const maxLines = 100
    for (let i = 0; i < maxLines; i++) {
      this.draw(ctx, width, height)
    }
  }
}
