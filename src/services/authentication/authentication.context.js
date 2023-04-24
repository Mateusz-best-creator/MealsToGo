import React, {useState, createContext} from "react";

import { signInUser } from "../firebaseUtils/firebase";
import { createAuthUserWithEmailAndPassoword } from "../firebaseUtils/firebase";

export const AuthenticationContext = createContext({
    isLoading: false,
    setIsLoading: () => null,
    user: null,
    setIsLoading: () => null,
    error: null,
    setError: () => null,
    isAuthenticated: false,
    setIsAuthenticated: () => null,
});

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [appUser, setAppUser] = useState(null);
    const [error, setError] = useState(null);

    const onLogin = async (email, password) => {
        try {
            setIsLoading(true);
            const {user} = await signInUser(email, password);
            setAppUser(user);
            setIsLoading(false);
            // console.log("USER", user);
        } catch(error) {
            console.log("ERRRR", error);
            // when we work with firebase and we have an error
            // we want to make it interact as an array so we use toString method!!!
            setError(error.toString());
        }
    }

    const onRegister = async(email, password) => {
        try{
            setIsLoading(true);
            const data = await createAuthUserWithEmailAndPassoword(email, password);
            console.log("data", data);
            setIsLoading(false);
        }catch(error) {
            setError(error.toString());
        }
    }

    value = {appUser, isLoading, error, onLogin, onRegister, isAuthenticated: !!appUser};

    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
}