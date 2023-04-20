import React, { useState, useEffect, createContext } from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext({
    keyword: null,
    setKeyword: () => null,
    location: "san francisco",
    setLocation: () => null,
    isLoading: false,
    setIsLoading: () => null,
    error: null,
    setError: () => null,
})

export const LocationContextProvider = ({ children }) => {

    const [keyword, setKeyword] = useState("San Francisco")
    const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword.toLowerCase());
        if (!searchKeyword.length) {
            // don't do anything
            return;
        }
        locationRequest(searchKeyword.toLowerCase())
            .then(locationTransform)
            .then(result => {
                setIsLoading(false);
                setLocation(result);
            }).catch(error => {
                setIsLoading(false);
                setError(error);
            })
    }

    value = {keyword, location, isLoading, error, onSearch}

    return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}