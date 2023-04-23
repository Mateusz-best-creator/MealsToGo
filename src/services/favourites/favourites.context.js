import React, {createContext, useState} from "react";

export const FavouritesContext = createContext({
    favourites: [],
    setFavourites: () => null,
})

export const FavouritesContextProvider = ({ children }) => {
    const [ favourites, setFavourites ] = useState([]);

    // adding restaurant ro favourites function
    const add = (restaurant) => {
        setFavourites([...favourites, restaurant])
    }
    // removing restaurant ro favourites function
    const remove = (restaurant) => {
        const { placeId } = restaurant;
        const filteredFavourites = favourites.filter((res) => {
            return res.placeId !== placeId;
        })
        setFavourites(filteredFavourites);
    }

    const value = {favourites, addToFavourites: add, removeFromFavourites: remove};

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}