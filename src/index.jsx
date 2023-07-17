import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import {Provider} from "react-redux";
import {setupStore} from "./utils/store";
const store = setupStore();


const root = ReactDOM.createRoot(
    document.getElementById('root')
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);

