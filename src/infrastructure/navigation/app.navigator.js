import React from "react";

import { SafeArea, Text } from "../../features/restaurants/screens/restaurants-screen.styles";

// expo icons
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

// naviggation stuff
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// restaurants separate navigator
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

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