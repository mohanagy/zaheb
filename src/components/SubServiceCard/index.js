import React from 'react'
import { Group, Details } from 'components'
import { Dimensions, TouchableOpacity } from 'react-native'
import { Image } from 'react-native-elements'
import PropTypes from 'prop-types'


const screen = Dimensions.get('screen')

const SubServiceCard = ({
  source, name, onPress, style, borderRadius, containerStyle, resizeMode,
}) => (
  <TouchableOpacity onPress={onPress}>
    <Group
      style={{
        flexDirection: 'row',
        marginTop: 15,
        margintBottom: 15,
        marginHorizontal: 25,
        borderRadius: 15,
        backgroundColor: '#FFF',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 16,

      }}
    >
      <Group
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1E1E1E',
          width: 120,
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15,
        }}
      >
        <Image
          resizeMode="contain"
          borderRadius={borderRadius}
          source={source}
          style={style}
          containerStyle={containerStyle}
        />
      </Group>
      <Group
        style={{
          justifyContent: 'center', alignItems: 'center', width: screen.width - 170,
        }}
      >
        <Details
          text={name}
          style={{
            color: '#1E1E1E', marginHorizontal: 0, fontSize: 18, textTransform: 'capitalize',
          }}
        />
      </Group>

    </Group>
  </TouchableOpacity>
)

SubServiceCard.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  source: PropTypes.any.isRequired,
  style: PropTypes.object.isRequired,
  containerStyle: PropTypes.object.isRequired,
  resizeMode: PropTypes.string,
  borderRadius: PropTypes.oneOf([PropTypes.string, PropTypes.number]),


}
SubServiceCard.defaultProps = {
  resizeMode: undefined,
  borderRadius: 0,
}

export default SubServiceCard
