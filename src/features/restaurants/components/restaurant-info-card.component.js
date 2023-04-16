import React from "react";
import styled from "styled-components";
import {View, Text, StyleSheet} from 'react-native';

// react native paper
import { Card } from 'react-native-paper';

const CardElement = styled(Card)`
    background-color: white;
    border-radius: 5px;
`

const CardCover = styled(Card.Cover)`
    padding: 20px;
    background-color: white;
`

const Title = styled.Text`
    padding: 16px;
    color: red;
`

const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = 'random address',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return (
        <CardElement elevation={5}>
            <CardCover source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </CardElement>
    )
}


export default RestaurantInfoCard;