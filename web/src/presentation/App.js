import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Router } from './Router';
import { Provider } from 'react-redux';
import './App.css';
import { onAuthStateChanged } from '../data/firebase/authentication';

export class App extends Component<{}> {

  unsubscribe = () => {};

  componentDidMount() {
    this.unsubscribe = onAuthStateChanged((user) => console.log(user), console.error, console.info)
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

App.displayName = "App";
