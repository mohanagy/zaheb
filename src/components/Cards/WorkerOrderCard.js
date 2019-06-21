import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { Group, TouchableOpacityView } from 'components'
const WorkerOrderCard = ({
  topRightText, topLeftText, bottomRightTextLabel, bottomRightTextValue, bottomLeftText,
  topRightTextStyle, topLeftTextStyle, bottomRightTextLabelStyle, bottomRightTextValueStyle, bottomLeftTextStyle, handlePress,
}) => (
  <TouchableOpacityView
    handlePress={() => handlePress}
  >
    <Group
      style={{
        marginHorizontal: 24,
        marginVertical: 12,
        elevation: 2,
        backgroundColor: '#ffffff',
        padding: 10,
      }}
    >
      <Group
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Text
          style={{
            textAlign: 'left',
            padding: 10,
            fontFamily: 'HelveticaNeueW23forSKY-Bd',
            color: '#13ce66',
            ...topRightTextStyle,
          }}
        >
          {topRightText}

        </Text>
        <Text
          style={{
            textAlign: 'left',
            padding: 10,
            fontFamily: 'HelveticaNeueW23forSKY-Reg',
            ...topLeftTextStyle,

          }}
        >
          {topLeftText}

        </Text>
      </Group>
      <Group
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Group
          style={{
            flexDirection: 'row',
          }}
        >
          <Text
            style={{
              textAlign: 'left',
              padding: 10,
              fontFamily: 'HelveticaNeueW23forSKY-Bd',
              color: '#99a9bf',
              ...bottomRightTextLabelStyle,
            }}
          >
            {bottomRightTextLabel}

          </Text>
          <Text
            style={{
              textAlign: 'left',
              padding: 10,
              fontFamily: 'HelveticaNeueW23forSKY-Reg',
              ...bottomRightTextValueStyle,
            }}
          >
            {bottomRightTextValue}

          </Text>
        </Group>
        <Text
          style={{
            fontFamily: 'HelveticaNeueW23forSKY-Bd',
            padding: 10,
            ...bottomLeftTextStyle,

          }}
        >
          {bottomLeftText}

        </Text>

      </Group>

    </Group>
  </TouchableOpacityView>
)


WorkerOrderCard.propTypes = {
  topRightText: PropTypes.string.isRequired,
  topLeftText: PropTypes.string.isRequired,
  bottomRightTextLabel: PropTypes.string.isRequired,
  bottomRightTextValue: PropTypes.string.isRequired,
  bottomLeftText: PropTypes.string.isRequired,
  topRightTextStyle: PropTypes.object.isRequired,
  topLeftTextStyle: PropTypes.object.isRequired,
  bottomRightTextLabelStyle: PropTypes.object.isRequired,
  bottomRightTextValueStyle: PropTypes.object.isRequired,
  bottomLeftTextStyle: PropTypes.object.isRequired,
  handlePress: PropTypes.func.isRequired,
}
export default WorkerOrderCard
