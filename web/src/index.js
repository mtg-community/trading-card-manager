import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './presentation/App';
import * as ServiceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('react-app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ServiceWorker.unregister();
