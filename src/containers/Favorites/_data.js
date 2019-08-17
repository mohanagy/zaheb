import rearMirror from '../../assets/rear_mirror.png'
import backSeats from '../../assets/purchase_image.png'

export default Array(5).fill(0).map(() => ({
  image: Math.random() < 0.5 ? rearMirror : backSeats,
  title: Math.random() < 0.5 ? 'Rear View Monitor' : 'Vehicle Seat Covers & Accessories',
}))
