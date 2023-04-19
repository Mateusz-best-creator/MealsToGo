import React, { createContext, useState, useEffect } from "react";

import { restaurantsRequest, restaurantTransform } from "./restaurant.service";

export const RestaurantsContext = createContext({
    restaurantsData: [],
    setRestaurantsData: () => '123123',
})

export const RestaurantProvider = ({children}) => {

    const [restaurantsData, setRestaurantsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
                .then(data => restaurantTransform(data))
                .then(result => {
                    setIsLoading(false);
                    setRestaurantsData(result);
                })
                .catch(error => {
                    setIsLoading(false);
                    setError(error);
                });
        }, 2000)
    }

    useEffect(() => {
        retrieveRestaurants();
    }, [])


    value = {restaurantsData, isLoading, error};

    return <RestaurantsContext.Provider value={value}>{children}</RestaurantsContext.Provider>
}