import React from 'react';

import { Map } from './map-screen.styles';
// search bar for map
import {Search} from '../components/map-search.component';

const MapScreen = () => {
  return (
    <>
      <Search />
      <Map />
    </>
  );
}

export default MapScreen;