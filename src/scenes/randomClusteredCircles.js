import { randomInt, randomGray, randomColor } from '../generators/primitives'


export default class RandomClusteredCircles {

  maxRadius = 75

  draw = (ctx, x, y) => {
    ctx.beginPath()
    ctx.lineWidth = randomInt(3)
    ctx.strokeStyle = randomGray()
    ctx.arc(
      randomInt(x.min, x.max),
      randomInt(y.min, y.max),
      randomInt(this.maxRadius),
      0,
      2 * Math.PI
    )
    ctx.stroke()
  }
  
  render = (ctx, width, height) => {
    const maxCircles = 15
    const clusters = 30
    const maxDistance = 15
  
    for (let i = 0; i < clusters; i++) {
      const  [x, y ] = [randomInt(width), randomInt(height)]
  
      for (let i = 0; i < maxCircles; i++) {
        this.draw(
          ctx,
          { min: x - maxDistance, max: x + maxDistance },
          { min: y - maxDistance, max: y + maxDistance }
        )
      }
    }
  }
}
