export const a = () => {
  console.log('a')
}

export const b = () => {
  console.log('b')
}

export const c = () => {
  b()
  console.log('c')
}
