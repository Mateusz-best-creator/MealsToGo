// import React from "react";

// // expo icons
// import { Ionicons } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';

// // naviggation stuff
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// // restaurants screen
// import RestaurantsScreen from '../../features/restaurants/screens/restaurants.screen';

// const Tab = createBottomTabNavigator();

// function SettingsScreen() {
//     return <SafeArea>
//       <Text>Settings!!!!</Text>
//     </SafeArea>
//   }
  
// function MapScreen() {
//     return <SafeArea>
//         <Text>Map!!!!</Text>
//     </SafeArea>
// }

// export const Nav = () => {
//     return (
//         <>
//             <NavigationContainer>
//                 <Tab.Navigator screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color }) => {
                        
//                         const { name } = route;
                        
//                         switch(name) {
//                         case 'Restaurants':
//                             focused ? color = 'tomato' : color = 'black';
//                             return <Ionicons name="restaurant-outline" size={24} color={color} />
//                         case 'Map':
//                             return <Feather name="map" size={24} color={color} />
//                         case 'Settings':
//                             return <Feather name="settings" size={24} color={color} />
//                         default:
//                             return;
//                         }
//                     },
//                     tabBarActiveTintColor: 'tomato',
//                     tabBarInactiveTintColor: 'gray',
//                     headerShown: false,
//                     })}
//                 >
                                
//                     <Tab.Screen  name="Restaurants" component={RestaurantsScreen} />
//                     <Tab.Screen name="Map" component={MapScreen} />
//                     <Tab.Screen name="Settings" component={SettingsScreen} />
//                 </Tab.Navigator>
//             </NavigationContainer>
//         </>
//     )
// }