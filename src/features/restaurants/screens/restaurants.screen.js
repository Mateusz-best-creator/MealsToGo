import React from "react";
import styled from "styled-components";
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

// React native-paper
import { Searchbar } from 'react-native-paper';

// components
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`

const SearchBarContainer = styled.View`
    padding: 16px;
`

const SearchingBar = styled(Searchbar)`
    border-radius: 5px;
`
const TextContainer = styled.View`
    flex: 1;
    padding: 16px;
`
const RestaurantsScreen = () => {
    return (
        <SafeArea>
            <SearchBarContainer>
                <SearchingBar/>
            </SearchBarContainer>
            <TextContainer>
                <RestaurantInfoCard />
            </TextContainer>
        </SafeArea>
    )
}

export default RestaurantsScreen;