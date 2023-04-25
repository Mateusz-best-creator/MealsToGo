import React from "react";
import { 
    createStackNavigator,
    CardStyleInterpolators,
} from '@react-navigation/stack';
// settings screen
import SettingsScreen from "../../features/settings/screen/settings.screen";
// favourites screen
import FavouritesScreen from "../../features/settings/screen/favourites.screen";

const Stack = createStackNavigator();

const SettingsNavigator = ({ navigation, route }) => {

  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
    </Stack.Navigator>
  );
}

export default SettingsNavigator;