import React from 'react';
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {View, Text} from 'react-native';

import RestaurantsScreen from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components';
import {theme} from './src/infrastructure/theme/index';

import {useFonts as useOswald, Oswald_400Regular,} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular,} from '@expo-google-fonts/lato';

// naviggation stuff
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SafeAreaView component from margin-top
import { SafeArea } from './src/features/restaurants/screens/restaurants-screen.styles';

// expo icons
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// restaurants context
import { RestaurantProvider } from './src/services/restaurants/restaurants.context';
// location context
import { LocationContextProvider } from './src/services/location/location.context';

function SettingsScreen() {
  return <SafeArea>
    <Text>Settings!!!!</Text>
  </SafeArea>
}

function MapScreen() {
  return <SafeArea>
    <Text>Map!!!!</Text>
  </SafeArea>
}

const Tab = createBottomTabNavigator();

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
            <NavigationContainer>
              <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color }) => {
                
                const { name } = route;
                
                switch(name) {
                  case 'Restaurants':
                    focused ? color = 'tomato' : color = 'black';
                    return <Ionicons name="restaurant-outline" size={24} color={color} />
                  case 'Map':
                    return <Feather name="map" size={24} color={color} />
                  case 'Settings':
                    return <Feather name="settings" size={24} color={color} />
                  default:
                    return;
                }
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
              headerShown: false,
            })}
          >
                            
                <Tab.Screen  name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </RestaurantProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

export default App;
