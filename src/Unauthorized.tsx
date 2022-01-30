import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./views/Login/Login";

const Unauthorized = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/'>
                    <Login/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Unauthorized;