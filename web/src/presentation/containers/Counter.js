import React from 'react';
import { connect } from 'react-redux';
import {
  counterSelector,
  decrementCounterAction,
  incrementCounterAction,
} from 'core/src/frameworks/redux/ducks';
import CounterComponent from '../components/Counter';

export function CounterContainer(props) {
  console.log('this.props', props);
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
