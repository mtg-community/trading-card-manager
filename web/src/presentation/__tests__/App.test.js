import React from 'react';
import ReactDOM from 'react-dom';
import { initializeDomainLayer } from '../../domain';
import { App } from '../containers/App';
import { initializeInternalization } from '../internalization';
import {Provider} from "react-redux";


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
