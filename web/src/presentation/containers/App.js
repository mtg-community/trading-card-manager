import {
  counterSelector,
  decrementCounterAction,
  incrementCounterAction,
} from 'core/src/frameworks/redux/ducks';
import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';

class App extends React.Component {
  render() {
    return (
      <Counter
        handleIncrement={this.increment}
        handleDecrement={this.decrement}
        counter={this.props.counter}
      />
    );
  }
}

const mapStateToProps = state => ({
  counter: counterSelector(state),
});

const mapDispatchToProps = {
  increment: incrementCounterAction,
  decrement: decrementCounterAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
