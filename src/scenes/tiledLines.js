import { randomGray, randomColor } from '../generators/primitives'

const draw = (ctx, x, y, width, height) => {
  const leftToRight = Math.random() >= 0.5
  ctx.beginPath()
  ctx.strokeStyle = Math.random() > 0.99 ? randomColor() : randomGray(200)
  if (leftToRight) {
    ctx.moveTo(x, y)
    ctx.lineTo(x + width, y + height)
  } else {
    ctx.moveTo(x + width, y)
    ctx.lineTo(x, y + height)
  }

  ctx.stroke()
}

const render = (ctx, width, height) => {
  const step = 25
  ctx.lineCap = 'square'
  ctx.lineWidth = 2

  console.log('Rendering!', width, height)
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      console.log('Drawing!')
      draw(ctx, x, y, step, step)
    }
  }
}

export default render
