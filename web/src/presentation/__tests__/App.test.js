import React from 'react';
import ReactDOM from 'react-dom';
import { initializeDomainLayer } from '../../domain';
import { initializeTranslationLayer } from '../../translation';
import { App } from '../App';

jest.mock('../../data/firebase/authentication', () => ({
  onAuthStateChanged: jest.fn(() => () => {}),
}));
const { store } = initializeDomainLayer();
const { locale, messages} = initializeTranslationLayer();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} locale={locale} messages={messages} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
