import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import CompaniesList from './CompaniesList';
import Company from './Company';
import JobsList from './JobsList';
import SignIn from './SignIn';
import Profile from './Profile';

function Routes({login, currentUser}) {
    return (
        <div className="Routes">
            <Switch>
                <Route exact path='/profile'>
                    <Profile currentUser={currentUser} />
                </Route>
                <Route exact path='/jobs'>
                    <JobsList />
                </Route>
                <Route exact path='/companies'>
                    <CompaniesList />
                </Route>
                <Route exact path='/companies/:company'>
                    <Company currentUser={currentUser} />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/login'>
                    <SignIn login={login} />
                </Route>
                <Redirect to='/' />                
            </Switch>
        </div>
    );
}

export default Routes;