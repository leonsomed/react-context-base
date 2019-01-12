import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import './loader';
import Root from './containers/root';
import { AppContextProvider } from './contexts/app';
import Dashboard from './containers/dashboard';

const App = (
    <BrowserRouter>
        <AppContextProvider>
            <Root>
                <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Redirect from="/" to="/dashboard" />
                </Switch>
            </Root>
        </AppContextProvider>
    </BrowserRouter>
);

ReactDOM.render(App, document.getElementById('root'));
