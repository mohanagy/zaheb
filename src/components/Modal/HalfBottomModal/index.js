import React from 'react'
import { Group } from 'components'
import Modal from 'react-native-modal'

export const HalfBottomModal = ({
  isModalVisible, children, style,onBackdropPress,
}) => (
  <Group style={{ ...style }}>
    <Modal
      onBackdropPress={onBackdropPress}
      isVisible={isModalVisible}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
    >
      {children}
    </Modal>
  </Group>
)


export default HalfBottomModal
