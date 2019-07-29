const arrayOf20 = Array(20).fill(0)

export default arrayOf20.map((_, ix) => ({
  name: 'Rear view monitor',
  date: '16/4/2018',
  price: '50',
  image: '',
  id: ix,
  liked: Math.random() < 0.5,
}))
