import { randomInt, randomGray } from '../generators/primitives'

const palettes = [
  ['f7edf0', 'f4cbc6', 'f4afab', 'f4eea9', 'f4f482', '595959'],
  ['f7b2b7', 'f7717d', 'de639a', '7f2982', '16001e', '313638'],
  ['bdede0', 'bbdbd1', 'b6b8d6', '7e78d2', '6f58c9', '4f345a'],
  ['51e5ff', '440381', 'ec368d', 'ffa5a5', 'ffd6c0', '0471a6'],
  ['d9d0de', 'bc8da0', 'a04668', 'ab4967', '0c1713', 'ddc67b'],
]

export default class CubicDisarray {
  draw = (ctx, width, height, palette = palettes[0]) => {
    ctx.lineCap = 'square'
    ctx.lineWidth = 1

    ctx.beginPath()
    ctx.rect(-width / 2, -height / 2, width, height)
    ctx.strokeStyle = randomGray()
    ctx.fillStyle = `#${palette[randomInt(palette.length)]}`
    ctx.stroke()
    ctx.fill()
  }

  render = (ctx, width, height) => {

    const randomDisplacement = 25
    const rotateMultiplier = 20
    const offset = 5
    const squareSize = 10
  
    for (let i = squareSize; i < width - squareSize; i += squareSize) {
      for (let j = squareSize; j < height - squareSize; j += squareSize) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1
        const rotateAmt =
          (((j / height) * Math.PI) / 180) *
          plusOrMinus *
          Math.random() *
          rotateMultiplier
  
        plusOrMinus = Math.random() < 0.5 ? -1 : 1
        const translateAmt =
          (j / height) * plusOrMinus * Math.random() * randomDisplacement
  
        const selectedPalette = palettes[randomInt(palettes.length)]

        ctx.save()
        ctx.translate(i + translateAmt + offset, j + offset)
        ctx.rotate(rotateAmt)
        this.draw(ctx, squareSize, squareSize, selectedPalette)

        ctx.restore()
      }
    }
  }
}
