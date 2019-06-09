export const randomInt = (max = 255) => {
  return Math.floor(Math.random() * max)
}

export const randomGray = () => {
  const g = randomInt()
  return `rgb(${g},${g},${g})`
}

export const randomColor = (cap = 255) => {
  const r = randomInt(cap)
  const g = randomInt(cap)
  const b = randomInt(cap)
  const a = randomInt()

  return `rgb(${r},${g},${b},${a})`
}
