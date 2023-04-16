import React from 'react';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import {theme} from './src/infrastructure/theme/index';

import {useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular,} from '@expo-google-fonts/lato';

const App = () => {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!oswaldLoaded || !latoLoaded) return;

  return (
    <>
    {/* Now every styled component will get theme in his props */}
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
    </>
  );
}

export default App;