import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './loader';
import Root from './containers/root';
import Routes from './routes.js';

const App = (
    <BrowserRouter>
        <Root>
            <Routes />
        </Root>
    </BrowserRouter>
);

ReactDOM.render(App, document.getElementById('root'));
