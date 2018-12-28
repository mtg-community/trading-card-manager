import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { initializeDomainLayer } from '../../domain';
import { initializeInternalization }  from '../internalization';
import { App } from '../App';

jest.mock('../../data/firebase/authentication', () => ({
  onAuthStateChanged: jest.fn(() => () => {}),
}));
const { store } = initializeDomainLayer();
const { messages } = initializeInternalization();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <App messages={messages} />
    </Provider>
      , div);
  ReactDOM.unmountComponentAtNode(div);
});
