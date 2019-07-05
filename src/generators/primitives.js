export const randomInt = (max = 255) => {
  return Math.floor(Math.random() * max)
}

export const randomGray = (cap = 255) => {
  const component = randomInt(cap)
  return `rgb(${component},${component},${component})`
}

export const randomColor = (cap = 255) => {
  const r = randomInt(cap)
  const g = randomInt(cap)
  const b = randomInt(cap)
  const a = randomInt()

  return `rgb(${r},${g},${b},${a})`
}
