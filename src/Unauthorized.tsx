import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./views/Login/Login";
import SignUp from "./views/Register/SignUp";

const Unauthorized = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/set-password'>
                    <SignUp/>
                </Route>
                <Route path='/'>
                    <Login/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Unauthorized;