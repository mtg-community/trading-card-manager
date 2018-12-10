import React from 'react';
import { connect } from 'react-redux';
import {
  counterSelector,
  decrementCounterAction,
  incrementCounterAction,
} from '../../core/frameworks/redux/ducks';
import CounterComponent from '../components/Counter';

export function CounterContainer(props) {
  return (
    <CounterComponent
      handleIncrement={() => props.increment(1)}
      handleDecrement={() => props.decrement(1)}
      counter={props.counter}
    />
  );
}

const mapStateToProps = state => ({
  counter: counterSelector(state),
});

const mapDispatchToProps = {
  increment: incrementCounterAction,
  decrement: decrementCounterAction,
};

export const Counter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterContainer);
