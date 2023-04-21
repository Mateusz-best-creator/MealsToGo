import React from "react";

import { Text } from "react-native";

import { 
    createStackNavigator,
    TransitionPresets,
} from "@react-navigation/stack";

// restaurants screen
import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen';
// restaurants details screen
import { RestaurantDetails } from "../../features/restaurants/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator headerMode="none" screenOptions={{
            ...TransitionPresets.ModalPresentationIOS
        }}>
            <RestaurantStack.Screen 
                name="Restaurants"  
                // everu component that is inside RestaurantStack.Navigator have access to navigation property and others...(DOCS)
                component={RestaurantsScreen} 
            />
            <RestaurantStack.Screen 
                name="RestaurantDetail" 
                component={RestaurantDetails} 
            />
        </RestaurantStack.Navigator>
    )
}