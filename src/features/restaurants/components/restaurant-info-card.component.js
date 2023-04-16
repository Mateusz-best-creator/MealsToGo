import React from "react";
import styled from "styled-components";
import {View, Text, StyleSheet} from 'react-native';

// react native paper
import { Card } from 'react-native-paper';

const CardElement = styled(Card)`
    background-color: ${props => props.theme.colors.bg.primary};
    border-radius: ${props => props.theme.sizes[0]};
`

const CardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.bg.primary};
`

const Title = styled.Text`
    padding: ${props => props.theme.space[3]};
    color: ${props => props.theme.colors.ui.primary};
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