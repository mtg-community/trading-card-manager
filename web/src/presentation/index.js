import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {addLocaleData} from 'react-intl';
import en from 'react-intl/locale-data/en';
import pt from 'react-intl/locale-data/pt'
import * as ServiceWorker from './serviceWorker';
import { allMessages } from './internalization/messages';

export const initializePresentationLayer = (store) => {
  addLocaleData([...en, ...pt]);
  const locale = window.navigator.language.split('-')[0];
  ReactDOM.render(<App store={store} locale={locale} messages={allMessages} />, document.getElementById('react-app'));

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  ServiceWorker.unregister();
};
