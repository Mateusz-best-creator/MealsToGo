import React from "react";

// expo icons
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// naviggation stuff
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// restaurants separate navigator
import { RestaurantsNavigator } from "./restaurants.navigator";

// map screen
import MapScreen from "../../features/map/screens/map-screen.screen";
// settings navigator
import SettingsNavigator from "./settings.navigator";
// restaurants context
import { RestaurantProvider } from "../../services/restaurants/restaurants.context";
// location context
import { LocationContextProvider } from "../../services/location/location.context";
// favourites context
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
    return (
        <NavigationContainer>
        <FavouritesContextProvider>
            <LocationContextProvider>
                <RestaurantProvider>
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
                                    
                        <Tab.Screen  name="Restaurants" component={RestaurantsNavigator} />
                        <Tab.Screen name="Map" component={MapScreen} />
                        <Tab.Screen name="Settings" component={SettingsNavigator} />
                    </Tab.Navigator>
                </RestaurantProvider>
            </LocationContextProvider>
            </FavouritesContextProvider>
        </NavigationContainer>
    )
}