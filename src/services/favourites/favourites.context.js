import React, {createContext, useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const saveFavourites = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@favourite_restaurants', jsonValue)
        } catch (e) {
          console.log("ERROR storing ", e);
        }
    }
    const loadFavourites = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@favourite_restaurants')
          const data =  jsonValue !== null ? JSON.parse(jsonValue) : null;
          setFavourites(data);
        } catch(error) {
            console.log("ERROR loading ", error);
        }
    }

    useEffect(() => {
        loadFavourites();
    }, [])

    useEffect(() => {
        saveFavourites(favourites);
    }, [favourites])

    const value = {favourites, addToFavourites: add, removeFromFavourites: remove};

    return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
}