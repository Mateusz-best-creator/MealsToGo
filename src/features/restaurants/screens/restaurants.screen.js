import React, {useContext} from "react";
import { FlatList, Pressable } from "react-native";

// components
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";

// restaurant context
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

import {
    SafeArea,
    LoaderContainer
} from './restaurants-screen.styles';

// loader
import Loader from "../../../components/activityIndicator/activity-indicator.component";
// search component
import Search from "../components/search.component";

const RestaurantsScreen = ({ navigation }) => {

    const { restaurantsData, isLoading } = useContext(RestaurantsContext);
    console.log(navigation);
    return (
        <SafeArea>
            <Search />
            {
                !isLoading
                ? (
                    <FlatList 
                        data={restaurantsData}
                        renderItem={({item}) => {
                            return (
                                // .navigate is a prop from navigation
                                <Pressable onPress={() => navigation.navigate("RestaurantDetail")}>
                                    <RestaurantInfoCard restaurant={item} />
                                </Pressable>   
                            )
                            
                            
                        }}
                        keyExtractor={item => item.name}
                        // these styled will apply to the holistic content inside the container.  / holistic => całościowy
                        contentContainerStyle={{padding: 8}}
                    />
                )
                : <LoaderContainer>
                    <Loader />
                </LoaderContainer>
                
            }
            
            
        </SafeArea>
    )
}

export default RestaurantsScreen;