import React, {useState, useContext} from "react";
import styled from "styled-components/native";
import {Button} from "react-native-paper";
import { Text } from "../../../components/text/text.component";
// restaurant info component
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { ScrollView } from "react-native";

// list accordion
import { List } from "react-native-paper";

import { SafeArea } from "./restaurants-screen.styles";

import { Spacer } from "../../../components/spacer/spacer.component";

// payment context
import { PaymentContext } from "../../../services/payments/payments.context";

export const PayButton = styled(Button)`
    width: 80%;
    margin: 0 auto;
    background-color: #2182BD;
    padding: ${props => props.theme.space[2]};
`

export const RestaurantDetailsScreen = ({ route: {params}, navigation }) => {

    const { productsToBuy, addProducts, addRestaurantData } = useContext(PaymentContext);
    const {photoUrl, restaurantData} = params;
    const [expandedBreakfast, setExpandedBreakfast] = useState(false);
    const [expandedLunch, setExpandedLunch] = useState(false);
    const [expandedDinner, setExpandedDinner] = useState(false);
    const [expandedDrinks, setExpandedDrinks] = useState(false);

    const handleButtonClick = () => {
        addProducts(productsToBuy, restaurantData);
        addRestaurantData(restaurantData);
        navigation.navigate("Payment")
    }

    return (
        <SafeArea style={{backgroundColor: 'white'}}>
            <RestaurantInfoCard restaurant={restaurantData} photoUrl={photoUrl} />
            <ScrollView>
                {/* this feature was build on react navigation documentation https://callstack.github.io/react-native-paper/4.0/list-accordion.html */}
                <List.Section>
                    <List.Accordion
                        title="Breakfast"
                        left={props => <List.Icon {...props} icon="bread-slice" />}
                        expanded={expandedBreakfast}
                        onPress={() => setExpandedBreakfast(!expandedBreakfast)}>
                        <List.Item title="Eggs Benedict" />
                        <List.Item title="Classic Breakfast" />
                    </List.Accordion>

                    <List.Accordion
                        title="Lunch"
                        left={props => <List.Icon {...props} icon="hamburger" />}
                        expanded={expandedLunch}
                        onPress={() => setExpandedLunch(!expandedLunch)}>
                        <List.Item title="Burger w/ Fries" />
                        <List.Item title="Steak Sandwich" />
                        <List.Item title="Mushroom Soup" />
                    </List.Accordion>

                    <List.Accordion
                        title="Dinner"
                        left={props => <List.Icon {...props} icon="food-variant" />}
                        expanded={expandedDinner}
                        onPress={() => setExpandedDinner(!expandedDinner)}>
                        <List.Item title="Spaghetti Bolognese" />
                        <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                        <List.Item title="Steak Frites" />
                    </List.Accordion>

                    <List.Accordion
                        title="Drinks"
                        left={props => <List.Icon {...props} icon="cup" />}
                        expanded={expandedDrinks}
                        onPress={() => setExpandedDrinks(!expandedDrinks)}>
                        <List.Item title="Coffee" />
                        <List.Item title="Tea" />
                        <List.Item title="Modelo" />
                        <List.Item title="Coke" />
                        <List.Item title="Fanta" />
                    </List.Accordion>
                </List.Section>
            </ScrollView>
            <PayButton onPress={() => handleButtonClick()}>
                <Text style={{color: 'white'}}>Order Special Only $19.99</Text>   
            </PayButton>
            <Spacer size='medium' />
        </ SafeArea>
    )
}