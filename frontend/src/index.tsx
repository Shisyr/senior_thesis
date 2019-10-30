import * as React from "react";
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {App} from "./App";
import rootReducer from './reducers';

const initialStore = {};

const store = createStore(rootReducer, initialStore);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
