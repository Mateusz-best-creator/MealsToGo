import React from "react";

// restaurant info component
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantDetails = ({ route: {params} }) => {
    
    const {photoUrl, restaurantData} = params;

    return (
        <>
            <RestaurantInfoCard restaurant={restaurantData} photoUrl={photoUrl} />
        </>
    )
}