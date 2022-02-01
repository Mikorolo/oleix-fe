import React, {FC} from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home/Home";
import StudentsList from "./StudentsList/StudentsList";
import SignUp from "./Register/SignUp";
import Catalogue from "./Catalogue/Catalogue";
import Workers from './Workers/Workers';
import Subjects from './Subjects/Subjects';
import Studies from './Studies/Studies';
import UserPanel from "./UserPanel/UserPanel";
import Applications from "./Applications/Applications";
import Stages from "./Stages/Stages";
import ForgotPassword from "./Login/ForgotPassword";
import Polls from "./Polls/Polls";
import Grades from "./Grades/Grades";
import FillPoll from "./Polls/FillPoll/FillPoll";
import Groups from "./Groups/Groups";
import ManageAdverts from "./Home/AdvertsAdminPanel/ManageAdverts";
import ManageApplications from "./Applications/ApplicationsAdminPanel/ManageApplications";

const Views:FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/catalogue">
                <Catalogue/>
            </Route>
            <Route path='/studentList'>
                <StudentsList/>
            </Route>
            <Route path="/new">
                <StudentsList/>
            </Route>
            <Route path="/workers">
                <Workers/>
            </Route>
            <Route path="/subjects">
                <Subjects/>
            </Route>
            <Route path="/studies">
                <Studies/>
            </Route>
            <Route path='/userPanel'>
                <UserPanel/>
            </Route>
            <Route path='/applications'>
                <Applications/>
            </Route>
            <Route path='/stages'>
                <Stages/>
            </Route>
            <Route path='/forgotPassword'>
                <ForgotPassword/>
            </Route>
            <Route path='/register'>
                <SignUp />
            </Route>
            <Route exact path='/polls'>
                <Polls/>
            </Route>
            <Route path='/grades'>
                <Grades/>
            </Route>
            <Route path="/polls/fillPoll/:lecturerId">
                <FillPoll/>
            </Route>
            <Route path='/Groups'>
                <Groups/>
            </Route>
            <Route path='/advertsAdminPanel'>
                <ManageAdverts/>
            </Route>
            <Route path='/manageApplications'>
                <ManageApplications/>
            </Route>
        </Switch>
    );

};

export default Views;