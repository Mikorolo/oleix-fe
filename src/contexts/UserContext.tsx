import React, { createContext, FC, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import Axios from "axios";
import {url} from "../consts/url";

interface CurrentUserInterface {
    userId: string,
    roleId: string
}

interface UserContextInterface {
    currentUser?: CurrentUserInterface;
    isPending: boolean;
    setIsPending: React.Dispatch<React.SetStateAction<boolean>>
    fetchUserData: () => Promise<void>
    onLogOut: () => Promise<void>
    onClearUser: () => void;
}

const UserContext = createContext<UserContextInterface | undefined>(undefined);

export const useCurrentUser = () => useContext(UserContext)!

interface PropsInterface {
    children: ReactNode;
}

const CurrentUser: FC<PropsInterface> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<CurrentUserInterface>();
    const [isPending, setIsPending] = useState(false);

    const onClearUser = () => {
        setCurrentUser(undefined)
    }

    const onLogOut = async () => {
        try {
            setIsPending(true)
            await Axios.post(`${url}/api/auth/logout`);
            setCurrentUser(undefined)
            setIsPending(false)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchUserData = useCallback(async () => {
        try {
            setIsPending(true)
            const { data } = await Axios.get<CurrentUserInterface>(`${url}/api/user`);
            setCurrentUser(data);
            setIsPending(false)
        } catch (e) {
            console.error(e);
        } finally {
            setIsPending(false)
        }
    }, [])

    useEffect(() => {
        fetchUserData().then();
    }, [fetchUserData]);


    const contextData = {
        currentUser,
        isPending,
        setIsPending,
        fetchUserData,
        onLogOut,
        onClearUser,
    };

    return (
        <UserContext.Provider value={contextData}>
            {children}
        </UserContext.Provider>
    );
}

export default CurrentUser;