import React from 'react'
import PropTypes from 'prop-types'

import {
  Group, Details, Select, SplashButton, LabelWithIcon, TextArea,
} from 'components'

export const NearestServiceModalBody = ({
  style, titleStyle, title, showPicker,
  selectVideoTapped,selectPhotoTapped,driver,setDriver,
  image,video,handleCreateOrder,description,handleChangeText,
}) => (
  <Group
    style={{
      ...style,
      height: '60%',
      backgroundColor: '#ffffff',
      maxWidth: '100%', // <= try this
      alignContent: 'space-around',
      justifyContent: 'space-between',


    }}
  >
    <Group
      style={{
        justifyContent: 'space-around',
        alignContent: 'space-around',
        margin: 47.5,
        marginHorizontal: 20,
        flex:1,
      }}
    >
      <Details
        text={title}
        style={{
          ...titleStyle, fontSize: 20, fontWeight: '900', color: 'black',
        }}
      />
      <Group
        style={{
          flexDirection: 'row',
          justifyContent: 'center',

        }}
      >
        <LabelWithIcon label="Select Date" style={{ maxWidth: '50%', marginHorizontal: 10 }} onPress={() => showPicker('Date')} />
        <LabelWithIcon
          label=" Select Time"
          style={{ maxWidth: '50%', marginHorizontal: 10 }}
          onPress={() => showPicker('Time')}
        />

      </Group>
      <Group>
        <Select
          options={[{ label: 'I don\'t need a driver', value: 0 }, { label: 'I need a driver', value: 1 }]}
          onValueChange={(value) => setDriver(value)}
          selectedValue={driver}
        />
      </Group>
      <Group>
        <TextArea
          placeholder="Service description (optional)"
          style={{
            inputStyle: {
              fontSize: 10,
              borderBottomWidth: 0,
            },
            inputContainerStyle: {
              borderBottomWidth: 0,


            },
            containerStyle: {
              borderBottomWidth: 0,

            },
          }}
          value={description}
          onChangeText={handleChangeText}
        />
      </Group>
      <Group
        style={{
          flexDirection: 'row',
          justifyContent: 'center',

        }}
      >
        <LabelWithIcon label={video ? '1 video ' : 'Attach a video'} style={{ maxWidth: '50%', marginHorizontal: 10 }} onPress={selectVideoTapped} />
        <LabelWithIcon
          label={image ? '1 photo ' : 'Attach a photo'}
          style={{ maxWidth: '50%', marginHorizontal: 10 }}
          textStyle={{
            fontWeight: '100',
          }}
          onPress={selectPhotoTapped}
        />

      </Group>
      <Group
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 20,

        }}
      >
        <SplashButton
          title="Confirm location"
          onPress={handleCreateOrder}
          style={{
            buttonStyle: {
              backgroundColor: '#1E1E1E',
              paddingHorizontal: 15,
              borderRadius: 99 ** 9,
              width: 180,
              alignSelf: 'center',
            },
          }}
        />
      </Group>
    </Group>
  </Group>
)


NearestServiceModalBody.propTypes = {
  style: PropTypes.object.isRequired,
  titleStyle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  showPicker: PropTypes.func.isRequired,
}

export default NearestServiceModalBody
