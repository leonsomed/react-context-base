import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './containers/dashboard';

export default () => (
    <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/dashboard" />
    </Switch>
);
