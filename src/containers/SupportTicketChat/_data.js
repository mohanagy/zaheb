// import userBlack from '../../assets/male-user-black.svg'
// import userPurple from '../../assets/male-user-purple.svg'

export default {
  collaborators: [
    {
      name: 'Ahmed',
      avatar: require('../../assets/male-user-black.png'),
      id: 1,
      current: true,
    },
    {
      name: 'Jameel',
      avatar: require('../../assets/male-user-purple.png'),
      id: 2,
    },
  ],
  chat: [
    { content: 'Hi!', time: 1566050700, senderId: 2 },
    { content: 'Lorem ipsum dolor sit amet.', time: 1566051700, senderId: 2 },
    { content: 'Lorem ipsum dolor sit amet.', time: 1566052700, senderId: 1 },
    { content: 'Lorem ipsum dolor sit amet.', time: 1566053700, senderId: 2 },
    { content: 'Lorem ipsum dolor sit amet.', time: 1566054700, senderId: 1 },
    { content: 'Lorem ipsum dolor sit amet.', time: 1566055700, senderId: 2 },
    { content: 'Lorem ipsum dolor sit amet.', time: 1566056700, senderId: 1 },
    { content: 'Lorem ipsum dolor sit amet.', time: 1566057700, senderId: 1 },
    { content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibuset magnis dis parturient montes, nascetur ridiculus mus. ', time: 1566058700, senderId: 2 },
  ],
}
