import React from "react";
import { Text } from "react-native";

const MapCallout = ({ restaurant }) => {

    const { name } = restaurant;

    return (
        <Text>{name}</Text>
    )
}

export default MapCallout;