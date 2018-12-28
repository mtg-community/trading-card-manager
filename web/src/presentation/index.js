import React from 'react';
import ReactDOM from 'react-dom';
import * as ServiceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { initializeInternalization } from './internalization';
import { App } from './App';

export const initializePresentationLayer = (store) => {
  const { messages } = initializeInternalization();
  ReactDOM.render(
    <Provider store={store}>
      <App messages={messages} />
    </Provider>,
    document.getElementById('react-app'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  ServiceWorker.unregister();
};
