import React, {useContext} from "react";
import {Text} from 'react-native';
import { Button } from "react-native-paper";
import { SafeArea } from "../../restaurants/screens/restaurants-screen.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsScreen = () => {
    const {onSignOut} = useContext(AuthenticationContext);
    return <SafeArea>
    <Button onPress={() => onSignOut()}>
        Log Out
    </Button>
      <Text>Settings!!!!</Text>
    </SafeArea>
}

export default SettingsScreen;