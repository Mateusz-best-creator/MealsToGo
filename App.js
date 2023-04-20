import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { ThemeProvider } from 'styled-components';
import {theme} from './src/infrastructure/theme/index';

import {useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular,} from '@expo-google-fonts/lato';

// restaurants context
import { RestaurantProvider } from './src/services/restaurants/restaurants.context';
// location context
import { LocationContextProvider } from './src/services/location/location.context';

import { AppNavigator } from './src/infrastructure/navigation/app.navigator';

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
        <LocationContextProvider>
          <RestaurantProvider>
            <AppNavigator />
          </RestaurantProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

export default App;
