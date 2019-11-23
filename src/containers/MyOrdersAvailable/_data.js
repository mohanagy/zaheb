const arrayOf20 = Array(20).fill(0)

export default arrayOf20.map((_, ix) => ({
  name: 'Rear view monitor',
  date: '16/4/2018',
  image: '',
  badge: Math.random() > 0.5 ? 'New' : 'Waiting',
  time: `4:30 ${Math.random() > 0.5 ? 'Am' : 'Pm'}`,
  id: ix,
}))
