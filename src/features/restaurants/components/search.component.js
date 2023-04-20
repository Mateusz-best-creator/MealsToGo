import React, {useContext, useState} from "react";

import { LocationContext } from "../../../services/location/location.context";

import {
    SearchBarContainer,
    SearchingBar,
} from '../screens/restaurants-screen.styles';

const Search = () => {

    const { keyword, onSearch } = useContext(LocationContext);
    const [searchKeyword, setSearchKeyword] = useState(keyword);

    return (
        <SearchBarContainer>
            <SearchingBar
                placeholder="Search for a location"
                value={searchKeyword}
                onSubmitEditing={() => {
                    onSearch(searchKeyword);
                }}
                onChangeText={(text) => {
                    setSearchKeyword(text);   
                }}
            />
        </SearchBarContainer>
    )
}

export default Search;