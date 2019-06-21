import React from 'react'
import { Button, Icon } from 'react-native-elements'
import PropTypes from 'prop-types'

const ColorFullButton = ({
  title, loading, type, onPress, icon, width, color, price, height, disabled,
  buttonStyle, containerStyle, titleStyle,
}) => (
  <Button
    title={title}
    disabled={disabled}
    icon={(
      icon ? (
        <Icon
          name={icon}
          type="font-awesome"
          size={15}
          color="white"
        />
      )
        : price
    )}
    buttonStyle={{
      height: height || 70,
      backgroundColor: color || '#F7BB3B',
      elevation: 2,
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
      margin: 15,
      paddingHorizontal: 15,
      ...buttonStyle,
    }}
    containerStyle={{
      width: width || '100%',
      ...containerStyle,

    }}
    titleStyle={{
      fontFamily: 'HelveticaNeueW23forSKY-Bd',
      fontSize: 12,
      ...titleStyle,
    }}
    loading={loading}
    type={type}
    onPress={onPress}
  />


)

ColorFullButton.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.any.isRequired,
  height: PropTypes.any.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  type: PropTypes.string,
  price: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object.isRequired,
  containerStyle: PropTypes.object.isRequired,
  titleStyle: PropTypes.object.isRequired,
  disabled: PropTypes.bool.isRequired,
}
ColorFullButton.defaultProps = {
  loading: false,
  type: 'solid',
}
export default ColorFullButton
