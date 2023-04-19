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
    LoaderContainer
} from './restaurants-screen.styles';

// loader
import Loader from "../../../components/activityIndicator/activity-indicator.component";

const RestaurantsScreen = () => {

    const {restaurantsData, isLoading, error} = useContext(RestaurantsContext);

    return (
        <SafeArea>
            <SearchBarContainer>
                <SearchingBar/>
            </SearchBarContainer>
            {
                !isLoading
                ? (
                    <FlatList 
                        data={restaurantsData}
                        renderItem={({item}) => {
                            return <RestaurantInfoCard restaurant={item} />
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