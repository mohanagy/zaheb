import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { View,Image } from 'react-native'
import PropTypes from 'prop-types'
import workShopIcon from 'assets/workShop.png'
import selectedWorkShopIcon from 'assets/selectedWorkShop.png'
import marker from 'assets/icons8-marker.png'

export const Maps = ({
  region, style, options, coordinate, workshops,selectedWorkShopId,onRegionChangeComplete,
}) => (
  <MapView
    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    style={style.map}
    region={region}
    onRegionChangeComplete={onRegionChangeComplete}
    {...options}
  >
    {coordinate && (
      <View
        style={{
          left: '50%',
          marginLeft: -24,
          marginTop: -48,
          position: 'absolute',
          top: '50%',
        }}
      >
        <Image
          style={{
            height: 48,
            width: 48,
          }}
          source={marker}
        />
      </View>
    )}
    {
      workshops.map((workshop) => (
        <MapView.Marker
          coordinate={{ latitude: Number(workshop.lat), longitude: Number(workshop.lng) }}
          title={workshop.name || ''}
          image={workshop.id === Number(selectedWorkShopId) ? selectedWorkShopIcon : workShopIcon}
        />

      ))
    }
  </MapView>
)


Maps.propTypes = {
  region: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  coordinate: PropTypes.object.isRequired,
  workshops: PropTypes.array.isRequired,
}
export default Maps
