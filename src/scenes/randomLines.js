import { randomInt, randomGray, randomColor } from '../generators/primitives'

const draw = (ctx, width, height) => {
  ctx.beginPath()
  ctx.lineWidth = randomInt(7)
  ctx.strokeStyle = randomGray()
  ctx.moveTo(randomInt(width), 0)
  ctx.lineTo(0, randomInt(height))
  ctx.stroke()
}

const render = (ctx, width, height) => {
  const maxLines = 100
  for (let i = 0; i < maxLines; i++) {
    draw(ctx, width, height)
  }
}

export default render
