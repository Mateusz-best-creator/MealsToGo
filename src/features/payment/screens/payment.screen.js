import React, {useState, useContext, useEffect} from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Avatar } from 'react-native-paper';

import { PaymentContext } from "../../../services/payments/payments.context";
// info card
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";
// safe area container
import { SafeArea } from "../../restaurants/screens/restaurants-screen.styles";
// text and spacer helper components
import { Text } from "../../../components/text/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";

// restaurant order component
import OrderedRestaurant from "../../../components/orderedRestaurant/ordered-restaurant.component";

const EmptyContainer = styled(View)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

const PaymentIcon = styled(Avatar.Icon).attrs({
    icon: 'folder',
    size: 140,
  })`
    background-color: #2182BD;
`

const OrdersContainer = styled.View`
    padding: ${props => props.theme.space[3]};
`

const PaymentScreen = () => {

    const {productsToBuy, restaurantSingleData} = useContext(PaymentContext);
    const [payRestaurants, setPayRestaurants] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        let localPrice = 0;
        const keysArray = Object.keys(productsToBuy);
        const productsArray = keysArray.map((item) => {
            localPrice += Number(productsToBuy[item]);
            return {
                name: item,
                quantity: productsToBuy[item],
            }
        })
        setPayRestaurants(productsArray);
        setTotalPrice(localPrice * 19.99);
    }, [productsToBuy, restaurantSingleData])

    return (
        <>
            {
                Object.keys(productsToBuy).length === 0
                ? <EmptyContainer>
                    <PaymentIcon />
                    <Spacer size="large" />
                    <Text>Your card is empty.</Text>
                </EmptyContainer>
                : (
                    <SafeArea>
                        <RestaurantInfoCard restaurant={restaurantSingleData} />
                        <OrdersContainer>
                            <Text>Your Orders:</Text>
                            {
                                payRestaurants.map((res, index) => {
                                    console.log("res",res);
                                    return (
                                        <>
                                            <Spacer size="medium" />
                                            <OrderedRestaurant key={`${index}-${res}`} resturantName={res.name} resturantQuantity={res.quantity} />
                                        </>
                                    )
                                })
                            }
                            <Spacer size="large" />
                            <Text>Total:</Text>
                            <Text>${totalPrice}</Text>
                        </OrdersContainer>
                    </SafeArea>
                )
            }
        </>
    )
}
// resturantName={restaurant[0]} resturantQuantity={} 
export default PaymentScreen;