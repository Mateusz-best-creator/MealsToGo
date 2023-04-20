import React, {useContext, useState} from "react";

import { LocationContext } from "../../../services/location/location.context";

import {
    SearchBarContainer,
    SearchingBar,
} from '../screens/restaurants-screen.styles';

const Search = () => {

    const { keyword, onSearchFunction } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    // useEffect(() => {
    //     setSearchKeyword(searchKeyword.trim());
    //     onSearchFunction(searchKeyword);
    // }, [])

    return (
        <SearchBarContainer>
            <SearchingBar
                elevation={4}
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    const wordWithoutSpaces = searchKeyword.trim()
                    onSearchFunction(wordWithoutSpaces);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);   
                }}
            />
        </SearchBarContainer>
    )
}

export default Search;