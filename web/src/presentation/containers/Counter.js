import React from 'react';
import { connect } from 'react-redux';
import {
  counterSelector,
  incrementCounterAction,
  decrementCounterAction,
} from 'core';
import { CounterComponent } from '../components/Counter';
import { setLocaleAction } from '../../domain/redux/ducks/localeReducer';

function CounterContainer({ increment, decrement, counter, changeLocale }) {
  return (
    <CounterComponent
      handleIncrement={() => increment(1)}
      handleDecrement={() => decrement(1)}
      counter={counter}
      handleChangeLocaleToPt = { () => changeLocale('pt')}
    />
  );
}

const mapStateToProps = state => ({
  counter: counterSelector(state),
});

const mapDispatchToProps = {
  increment: incrementCounterAction,
  decrement: decrementCounterAction,
  changeLocale: setLocaleAction
};

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
