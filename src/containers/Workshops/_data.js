const arrayOf20 = Array(20).fill(0)

export default arrayOf20.map((_, ix) => ({
  name: 'Dream workshop',
  rating: Math.floor(Math.random() * 50) / 10,
  liked: Math.random() < 0.5,
}))
