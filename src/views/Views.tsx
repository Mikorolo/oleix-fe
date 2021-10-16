import React, {FC} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home/Home";
import AddNewAdvert from "./AddNewAdvert/AddNewAdvert";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Adverts from "./Adverts/Adverts";

const Views:FC = () => (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/adverts">
            <Adverts/>
        </Route>
        <Route path = "/new">
            <AddNewAdvert/>
        </Route>
        <Route path = "/login">
            <Login/>
        </Route>
        <Route path = "/register">
            <Register/>
        </Route>
    </Switch>
);

export default Views;