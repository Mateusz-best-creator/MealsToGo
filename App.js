import React from 'react';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import {theme} from './src/infrastructure/theme/index';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}

export default App;