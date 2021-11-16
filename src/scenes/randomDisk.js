import { randomInt, randomGray } from '../generators/primitives'

const palettes = [
  ['f7edf0', 'f4cbc6', 'f4afab', 'f4eea9', 'f4f482', '595959'],
  ['f7b2b7', 'f7717d', 'de639a', '7f2982', '16001e', '313638'],
  ['bdede0', 'bbdbd1', 'b6b8d6', '7e78d2', '6f58c9', '4f345a'],
  ['51e5ff', '440381', 'ec368d', 'ffa5a5', 'ffd6c0', '0471a6'],
  ['d9d0de', 'bc8da0', 'a04668', 'ab4967', '0c1713', 'ddc67b'],
]

const maxCircles = randomInt(550)

class RandomCircles {
  draw = (ctx, width, height, palette = palettes[0]) => {
    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.fillStyle = `#${palette[randomInt(palette.length)]}`
    ctx.arc(randomInt(width), randomInt(height), randomInt(110), 0, 2 * Math.PI)
    ctx.fill()
  }

  render = (ctx, width, height) => {
    ctx.beginPath()
    ctx.rect(0, 0, width, height)
    ctx.fillStyle = randomGray()
    ctx.fill()

    const selectedPalette = palettes[randomInt(palettes.length)]
    for (let i = 0; i < maxCircles; i++) {
      this.draw(ctx, width, height, selectedPalette)
    }
  }
}

export default RandomCircles
