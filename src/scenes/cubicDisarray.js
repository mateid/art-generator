import { randomGray } from '../generators/primitives'
export default class CubicDisarray {
  draw = (ctx, width, height) => {
    ctx.beginPath()
    ctx.rect(-width / 2, -height / 2, width, height)
    ctx.strokeStyle = randomGray()
    ctx.stroke()
  }

  render = (ctx, width, height) => {
    ctx.lineCap = 'square'
    ctx.lineWidth = 1
  
    const randomDisplacement = 15
    const rotateMultiplier = 20
    const offset = 10
    const squareSize = 25
  
    for (let i = squareSize; i <= width - squareSize; i += squareSize) {
      for (let j = squareSize; j <= height - squareSize; j += squareSize) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1
        const rotateAmt =
          (((j / height) * Math.PI) / 180) *
          plusOrMinus *
          Math.random() *
          rotateMultiplier
  
        plusOrMinus = Math.random() < 0.5 ? -1 : 1
        const translateAmt =
          (j / height) * plusOrMinus * Math.random() * randomDisplacement
  
        ctx.save()
        ctx.translate(i + translateAmt + offset, j + offset)
        ctx.rotate(rotateAmt)
        this.draw(ctx, squareSize, squareSize)
        ctx.restore()
      }
    }
  }
}
