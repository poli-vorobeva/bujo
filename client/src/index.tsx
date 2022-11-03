import { createRoot } from 'react-dom/client';
import React from "react";
import {App} from "./app";
import reducer from './reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const root = createRoot(document.getElementById('root'));
const store = createStore(reducer);

root.render(        
    <Provider store={store}>
        <App/>
    </Provider>
);
