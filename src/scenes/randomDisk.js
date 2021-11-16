import { randomInt } from '../generators/primitives'

const palettes = [
  ['f7edf0', 'f4cbc6', 'f4afab', 'f4eea9', 'f4f482', '595959'],
  ['f7b2b7', 'f7717d', 'de639a', '7f2982', '16001e', '313638'],
  ["bdede0","bbdbd1","b6b8d6","7e78d2","6f58c9","4f345a"]
]
const maxCircles = 200



class RandomCircles {
  draw = (ctx, width, height, palette = palettes[0]) => {
    ctx.beginPath()
    ctx.lineWidth = 1
    ctx.fillStyle = `#${palette[randomInt(palette.length)]}`
    ctx.arc(
      randomInt(width),
      randomInt(height),
      randomInt(75, 125),
      0,
      2 * Math.PI
    )
    ctx.fill()
  }

  render = (ctx, width, height) => {
    const selectedPalette = palettes[randomInt(palettes.length)]
    for (let i = 0; i < maxCircles; i++) {
      this.draw(ctx, width, height, selectedPalette)
    }
  }
}

export default RandomCircles
