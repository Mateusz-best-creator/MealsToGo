import React from "react";
import styled from "styled-components";
import {View, Text, StyleSheet, Image} from 'react-native';

// react native paper
import { Card } from 'react-native-paper';

const CardElement = styled(Card)`
    background-color: ${props => props.theme.colors.bg.primary};
    border-radius: ${props => props.theme.space[2]};
`

const CardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]};
    background-color: ${props => props.theme.colors.bg.primary};
`

const Info = styled.View`
    padding: ${props => props.theme.space[3]};
`

const Title = styled.Text`
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.body};
    color: ${props => props.theme.colors.ui.primary};
`

const Address = styled.Text`
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.caption};
    color: ${props => props.theme.colors.ui.primary};
`

const ImageContainer = styled.Image`
    height: ${props => props.theme.fontSizes.h5};
    width: 20px;
`

const OpenImage = styled.Image`
    height: ${props => props.theme.fontSizes.h5};
    width: 20px;
    margin-left: ${props => props.theme.sizes[0]};
    margin-right: ${props => props.theme.sizes[0]};

`

const Rating = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: ${props => props.theme.space[2]};
    padding-bottom: ${props => props.theme.space[2]};
`

const StartContainer = styled.View`
    display: flex;
    flex-direction: row;
`

const SectionEnd = styled.View`
    display: flex;
    flex-direction: row;
`

const ClosedText = styled.Text`
    margin-top: 2px;
`

const RestaurantInfoCard = ({ restaurant = {} }) => {

    const {
        name = 'Some Restaurant',
        icon = '',
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = 'random address',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <CardElement elevation={5}>
            <CardCover source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Rating>
                    <StartContainer>
                        {
                            ratingArray.map((_, index) => {
                                return <ImageContainer key={index} source={require('../../../../assets/star2.jpg')} />
                            })
                        }
                    </StartContainer>
                    <SectionEnd>
                        {
                            isClosedTemporarily && 
                                <ClosedText variant="label" style={{color: 'red'}}>
                                    CLOSED TEMPORARILY
                                </ClosedText>
                        }
                        {isOpenNow && <OpenImage source={require('../../../../assets/open.png')} />}
                        <ImageContainer source={require('../../../../assets/sleep.png')} />
                    </SectionEnd>
                </Rating>
                <Address>{address}</Address>
            </Info>
        </CardElement>
    )
}


export default RestaurantInfoCard;