import * as scenes from './index'

export default [
  { name: 'Cubic Disarray', renderer: new scenes.cubicDisarray() },
  { name: 'Tiled Lines', renderer: new scenes.tiledLines() },
  { name: 'Random Circles', renderer: new scenes.randomCircles() },
  { name: 'Random Clustered Circles', renderer: new scenes.randomClusteredCircles() },
  { name: 'Random Disk', renderer: new scenes.randomDisk() },
  { name: 'Random Lines', renderer: new scenes.randomLines() }
]
