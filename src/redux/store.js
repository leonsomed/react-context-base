import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const persistedState = undefined;

const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(thunk),
);

export default store;
