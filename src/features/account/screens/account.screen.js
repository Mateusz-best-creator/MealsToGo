import React from "react";

import { 
    AccountBackground, 
    AccountCover,
    AccountContainer,
    AuthButton,
} from "../components/account.styles";

// spacer helper component
import {Spacer} from '../../../components/spacer/spacer.component';

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton icon="account-lock-open-outline" onPress={() => navigation.navigate("Login")}>
            Login
        </AuthButton>
        <Spacer size="large" />
        <AuthButton icon="account-cowboy-hat-outline" onPress={() => navigation.navigate("Register")}>
            Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;