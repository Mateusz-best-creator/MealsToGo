import React, {useContext, useEffect, useState} from 'react';
import {Text} from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';

import { Map } from './map-screen.styles';
// search bar for map
import {Search} from '../components/map-search.component';

// map callout component
import MapCallout from '../components/map-callout.component';

const MapScreen = () => {

  const {location} = useContext(LocationContext);
  const {restaurantsData} = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0)

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    const latDelta = northeastLat - southwestLat;
    setLatDelta(latDelta);
  }, [location, viewport])

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {
          restaurantsData.map((restaurant) => {
            return (
              <Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              >
                <Callout>
                  <MapCallout restaurant={restaurant} />
                </Callout>
              </Marker> 
            )
          })
        }
      </Map>
    </>
  );
}

export default MapScreen;