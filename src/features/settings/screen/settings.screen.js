import React, {useContext, useEffect, useState} from "react";
import { TouchableOpacity, Image } from "react-native";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/text/text.component";
import styled from "styled-components/native";
import { List, Avatar  } from "react-native-paper";
import { SafeArea } from "../../restaurants/screens/restaurants-screen.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

// get user photo from asyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const UserPhotoImage = styled.Image`
  width: 170px;
  height: 170px;
`

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
`;

const SettingsScreen = ({ navigation }) => {

  const [userPhoto, setUserPhoto] = useState(null)
  const {onSignOut, appUser} = useContext(AuthenticationContext);

  useEffect(() => {
    const getData = async () => {
      try {
        const photoUserUrl = await AsyncStorage.getItem(`${appUser.uid}-photo`);
        if(photoUserUrl !== null) {
          setUserPhoto(photoUserUrl);
        }
      } catch(error) {
        console.log("Problems with getting user photo.", error)
      }
    }
    getData();
  }, [appUser, userPhoto])

  return (
    <SafeArea>
      <SettingsBackground>
        <Spacer size='large' />
        <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
          <SettingsIconContainer>
            {
                !userPhoto
                ? <SettingsIcon/>
                : <UserPhotoImage source={{uri: userPhoto}} />
            }
          </SettingsIconContainer>
        </TouchableOpacity>
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