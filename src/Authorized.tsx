import React from 'react';
import {BrowserRouter} from "react-router-dom";
import NavigationBar from "./components/Navbar/NavigationBar";
import Views from "./views/Views";

const Authorized = () => {
    return (
        <BrowserRouter>
            <NavigationBar />
            <Views />
        </BrowserRouter>
    );
};

export default Authorized;