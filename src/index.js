import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './loader';
import Root from './containers/root';
import Routes from './routes.js';
import store from './redux/store.js';

const App = (
    <Provider store={store}>
        <BrowserRouter>
            <Root>
                <Routes />
            </Root>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
