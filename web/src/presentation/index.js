import React from 'react';
import ReactDOM from 'react-dom';
import * as ServiceWorker from './serviceWorker';
import { App } from './App';
import { initializeInternalization } from './internalization';

export const initializePresentationLayer = (store) => {
  const { locale, messages } = initializeInternalization();
  ReactDOM.render(<App store={store} locale={locale} messages={messages} />, document.getElementById('react-app'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  ServiceWorker.unregister();
};
