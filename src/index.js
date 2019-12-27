import React from 'react';
import ReactDOM from 'react-dom';
import './app/style/app.scss';
import * as serviceWorker from './serviceWorker';
import AppRouter from './app/route/appRouter';
import configureStore from './app/store/configureStore';
const store = configureStore();

ReactDOM.render(<AppRouter store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
