import React, {useContext} from "react";
import { FlatList } from "react-native";

// components
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";

// restaurant context
import {RestaurantsContext} from '../../../services/restaurants/restaurants.context';

import {
    SafeArea,
    SearchBarContainer,
    SearchingBar,
} from './restaurants-screen.styles';

const RestaurantsScreen = () => {

    const {restaurantsData, isLoading, error} = useContext(RestaurantsContext)

    return (
        <SafeArea>
            <SearchBarContainer>
                <SearchingBar/>
            </SearchBarContainer>
            <FlatList 
                data={restaurantsData}
                renderItem={({item}) => {
                    return <RestaurantInfoCard restaurant={item} />
                }}
                keyExtractor={item => item.name}
                // these styled will apply to the holistic content inside the container.  / holistic => całościowy
                contentContainerStyle={{padding: 8}}
            />
            
        </SafeArea>
    )
}

export default RestaurantsScreen;