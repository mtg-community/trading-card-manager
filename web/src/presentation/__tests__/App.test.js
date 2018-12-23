import React from 'react';
import ReactDOM from 'react-dom';
import { initializeDomainLayer } from '../../domain';
import { App } from '../App';

jest.mock('../../data/firebase/authentication', () => ({
  onAuthStateChanged: jest.fn(() => () => {}),
}));
const { store } = initializeDomainLayer();


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
