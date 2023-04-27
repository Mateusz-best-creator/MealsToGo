import React, {useState, useContext} from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { View } from "react-native";
import styled from "styled-components/native";
import { Avatar } from 'react-native-paper';
import { Text } from "../../../components/text/text.component";

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

const PaymentScreen = () => {
    const [data, setData] = useState(null);

    return (
        <>
            {
                !data
                ? <EmptyContainer>
                    <PaymentIcon />
                    <Spacer size="large" />
                    <Text>Your card is empty.</Text>
                </EmptyContainer>
                : <EmptyContainer>
                    <Text>Payment screen</Text>
                </EmptyContainer>
            }
        </>
    )
}

export default PaymentScreen;