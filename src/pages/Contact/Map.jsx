import React from 'react';
import classNames from 'classnames';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const options = {
  disableDefaultUI: true,
  zoom: 15,
  center: {
    lat: -41.3163,
    lng: -72.9860,
  },
  mapId: process.env.REACT_APP_MAP_ID,
}

const marker = {
  lat: -41.3160,
  lng: -72.9840,
};

function Map() {
  const [info, setInfo] = React.useState(true);
  const infoClass = classNames(
    'map__info',
    { 'map__info--active': info },
    { 'map__info--inactive': !info }
  );

  const handleMarkerClick = () => {
    setInfo(!info);
  }

  return <LoadScript
    googleMapsApiKey={process.env.REACT_APP_API_KEY}>
    <GoogleMap
      mapContainerClassName='contact__map'
      options={options}>
      <Marker onClick={handleMarkerClick} position={marker}/>
      <div className={infoClass}>
        <p>Luciano Morales,</p>
        <p>Puerto Varas, Chile</p>
      </div>
    </GoogleMap>
  </LoadScript>
} 

export default Map;