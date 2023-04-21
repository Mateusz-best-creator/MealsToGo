import React, {useContext} from "react";
import { FlatList, TouchableOpacity } from "react-native";

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
    
    return (
        <SafeArea>
            <Search />
            {
                !isLoading
                ? (
                    <FlatList 
                        data={restaurantsData}
                        renderItem={({item}) => {
                            // console.log("item : ", item.photos);
                            return (
                                // .navigate is a prop from navigation
                                <TouchableOpacity  onPress={() => navigation.navigate("RestaurantDetail", {restaurantData: item, photoUrl: item.photos[0]})}>
                                    <RestaurantInfoCard restaurant={item} />
                                </TouchableOpacity >   
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