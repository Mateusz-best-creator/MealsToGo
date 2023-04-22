import React from "react";
import {Text} from 'react-native';
import { SafeArea } from "../../features/restaurants/screens/restaurants-screen.styles";

// expo icons
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// naviggation stuff
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// restaurants separate navigator
import { RestaurantsNavigator } from "./restaurants.navigator";

// map and settings screens
import MapScreen from "../../features/map/screens/map-screen.screen";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
    return <SafeArea>
      <Text>Settings!!!!</Text>
    </SafeArea>
  }

export const AppNavigator = () => {
    return (
        <>
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
                                
                    <Tab.Screen  name="Restaurants" component={RestaurantsNavigator} />
                    <Tab.Screen name="Map" component={MapScreen} />
                    <Tab.Screen name="Settings" component={SettingsScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </>
    )
}