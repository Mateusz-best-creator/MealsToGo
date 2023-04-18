import React from "react";
import { FlatList } from "react-native";

// components
import {RestaurantInfoCard} from "../components/restaurant-info-card.component";

import {
    SafeArea,
    SearchBarContainer,
    SearchingBar,
} from './restaurants-screen.styles';

const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchBarContainer>
                <SearchingBar/>
            </SearchBarContainer>
            <FlatList 
                data={[{name: 1}, {name: 2},{name: 3}, {name: 4},{name: 5}, {name: 6}]}
                renderItem={() => <RestaurantInfoCard />}
                keyExtractor={item => item.name}
                // these styled will apply to the holistic content inside the container.  / holistic => całościowy
                contentContainerStyle={{padding: 8}}
            />
            
        </SafeArea>
    )
}

export default RestaurantsScreen;