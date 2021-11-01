import React, {FC} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home/Home";
import StudentsList from "./StudentsList/StudentsList";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Catalogue from "./Catalogue/Catalogue";

const Views:FC = () => (
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/adverts">
            <Catalogue/>
        </Route>
        <Route path='/studentList'>
            <StudentsList/>
        </Route>
        <Route path = "/new">
            <StudentsList/>
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