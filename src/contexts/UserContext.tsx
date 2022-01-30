import React, { createContext, FC, ReactNode, useContext, useState } from 'react';
import Axios from "axios";
import {url} from "../consts/url";

interface UserContextInterface {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
    onLogOut: () => Promise<void>
}

const UserContext = createContext<UserContextInterface | undefined>(undefined);

export const useCurrentUser = () => useContext(UserContext)!

interface PropsInterface {
    children: ReactNode;
}

const CurrentUser: FC<PropsInterface> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const onLogOut = async () => {
        try {
            setIsAuthenticated(true)
            await Axios.post(`${url}/api/auth/logout`);
            setIsAuthenticated(false)
        } catch (e) {
            console.log(e)
        }
    }

    const contextData = {
        isAuthenticated,
        setIsAuthenticated,
        onLogOut,
    };

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    );
}

export default CurrentUser;