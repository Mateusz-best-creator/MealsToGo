import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import CompactRestaurantInfo from "../restaurant/contact-restaurant-info.component";

const FavouritesWrapper = styled.View`
    padding: 10px;
`

const FavouritesBar = ({ favourites }) => {
    console.log("FAVOUR", favourites, favourites[0].photos[0])
    return (
        <FavouritesWrapper>
            <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                {
                    favourites &&
                    favourites.map((restaurant) => {
                        const key = restaurant.name;
                        console.log(restaurant.photos[0])
                        return (
                            <Spacer key={key} position={"left"} size="medium">
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </Spacer>
                        )
                    })
                }
            </ScrollView>
        </FavouritesWrapper>
    )
}

export default FavouritesBar;