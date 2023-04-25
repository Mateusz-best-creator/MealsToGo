import React, {useContext} from "react";
import { ImageBackground } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/text/text.component";
import styled from "styled-components/native";
import { List, Avatar  } from "react-native-paper";
import { SafeArea } from "../../restaurants/screens/restaurants-screen.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${props => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.7);
  color: white;
  width: 100%;
`

const EmailContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.h4};
`

const SettingsIconContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const SettingsIcon = styled(Avatar.Icon).attrs({
    icon: 'apps',
    size: 140,
})`
  background-color: #2182BD;
`

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
`;

const SettingsScreen = ({ navigation }) => {
    const {onSignOut, appUser} = useContext(AuthenticationContext);
    return (
      <SafeArea>
        <SettingsBackground>
          <Spacer size='large' />
          <SettingsIconContainer>
            <SettingsIcon/>
          </SettingsIconContainer>
          <Spacer size='large' />
          <Spacer size='large' />
            <EmailContainer>
              <Text style={{fontSize: 20}} variant='caption'>{appUser.email}</Text>
            </EmailContainer>
          <Spacer size='large' />
          <Spacer size='large' />
          <List.Section>
            <SettingsItem 
              title="Favourites" 
              left={() => <List.Icon icon="star" />} 
              onPress={() => navigation.navigate("Favourites")} 
              description="View your favourites"
            />
            <Spacer size='large' />
            <SettingsItem 
              title="Logout" 
              left={() => <List.Icon icon="door" />} 
              onPress={() => onSignOut()} 
            />
          </List.Section>
        </SettingsBackground>
      </SafeArea>
    )
}

export default SettingsScreen;

{/* <Button onPress={() => onSignOut()}>
          Log Out
      </Button> */}