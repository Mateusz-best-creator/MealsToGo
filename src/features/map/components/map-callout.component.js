import React from "react";
import CompactRestaurantInfo from '../../../components/restaurant/contact-restaurant-info.component';

const MapCallout = ({ restaurant }) => {
    return (
        <CompactRestaurantInfo 
            restaurant={restaurant}
        />
        
    )
}

export default MapCallout;