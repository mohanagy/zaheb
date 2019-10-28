import React from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import PropTypes from 'prop-types'
import workShopIcon from 'assets/workShop.png'
import selectedWorkShopIcon from 'assets/selectedWorkShop.png'
export const Maps = ({
  region, style, options, coordinate, workshops,selectedWorkShopId,
}) => (
  <MapView
    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    style={style.map}
    region={region}
    {...options}
  >
    {coordinate && (
      <MapView.Marker
        coordinate={{ latitude: Number(coordinate.latitude), longitude: Number(coordinate.longitude) }}
        title="Your Location"
      />
    )}
    {
      workshops.map((workshop) => (
        <MapView.Marker
          coordinate={{ latitude: Number(workshop.lat), longitude: Number(workshop.lng) }}
          title={workshop.name || ''}
          image={workshop.id === selectedWorkShopId ? selectedWorkShopIcon : workShopIcon}
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
