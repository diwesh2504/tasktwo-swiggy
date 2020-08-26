import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore,combineReducers} from 'redux';
import { itemReducer } from './reducers/itemReducer';
import { cartReducer } from './reducers/cartReducer';

const reducer=combineReducers({
    items:itemReducer,
    cart:cartReducer
});
const store=createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById("root")
)