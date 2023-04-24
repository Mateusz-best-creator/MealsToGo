import React, {useState, createContext} from "react";

import { signInUser } from "../firebaseUtils/firebase";

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
    const [isLoading, setIsLoading] = useState(false)
    const [appUser, setAppUser] = useState(null)
    const [error, setError] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onLogin = async (email, password) => {
        try {
            setIsLoading(true);
            const {user} = await signInUser(email, password);
            setAppUser(user);
            setIsLoading(false);
            console.log("USER", user);
        } catch(error) {
            console.log("ERRRR", error);
            setError(error);
        }
        
    }

    value = {appUser, isLoading, error, onLogin, isAuthenticated};

    return <AuthenticationContext.Provider value={value}>{children}</AuthenticationContext.Provider>
}