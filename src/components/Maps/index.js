import React from 'react'
import { View } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import PropTypes from 'prop-types'

export const Maps = ({ region, style, options }) => (
  <View style={style.container}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={style.map}
      region={region}
      {...options}
    >
    </MapView>
  </View>
)


Maps.propTypes = {
  region: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
}
export default Maps
