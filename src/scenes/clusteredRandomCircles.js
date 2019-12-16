import { randomInt, randomGray, randomColor } from '../generators/primitives'

const draw = (ctx, width, height) => {
  ctx.beginPath()
  ctx.lineWidth = randomInt(5)
  ctx.strokeStyle = Math.random() > 0.99 ? randomColor() : randomGray()
  ctx.arc(randomInt(width), randomInt(height), randomInt(150), 0, 2 * Math.PI)
  ctx.stroke()
}

const render = (ctx, width, height) => {
  const maxCircles = 500
  for (let i = 0; i < maxCircles; i++) {
    draw(ctx, width, height)
  }
}

export default render
