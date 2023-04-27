import React from "react";
import PaymentScreen from "../../features/payment/screens/payment.screen";
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const PaymentNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Payment2" component={PaymentScreen} />
        </Stack.Navigator>
    )
}

export default PaymentNavigator;