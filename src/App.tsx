import React from 'react';
import './App.css';
import {useCurrentUser} from "./contexts/UserContext";
import Authorized from "./Authorized";
import Unauthorized from "./Unauthorized";
import Pending from "./Pending";

const App = () => {
    const { isPending, currentUser } = useCurrentUser();

    if (isPending) {
        return (<Pending/>)
    }

    if (currentUser) {
        return (<Authorized/>)
    }

    return (
        <Unauthorized/>
    );
}

export default App;
