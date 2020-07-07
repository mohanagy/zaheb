import React from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types'
import workShopIcon from 'assets/workShop.png'
import selectedWorkShopIcon from 'assets/selectedWorkShop.png'
import marker from 'assets/icons8-marker.png'

export const Maps = ({
  region,
  style,
  options,
  coordinate,
  workshops,
  selectedWorkShopId,
  onRegionChangeComplete,
  allowMarker,
  markerCoordinates,
  updateUserCoordinates,
  updateMarkerCoordinates,
}) => (
  <MapView
    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    style={style.map}
    region={region}
    onRegionChangeComplete={onRegionChangeComplete}
    {...options}>

    {allowMarker && <MapView.Marker.Animated
      draggable
      coordinate={markerCoordinates}

      onDragEnd={(e)=>{
        updateMarkerCoordinates(e.nativeEvent.coordinate)


      }}
    />}

    {workshops.map((workshop) => (
      <MapView.Marker
        coordinate={{
          latitude: Number(workshop.lat),
          longitude: Number(workshop.lng),
        }}
        title={workshop.name || ''}
        image={
          workshop.id === Number(selectedWorkShopId)
            ? selectedWorkShopIcon
            : workShopIcon
        }
      />
    ))}
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
