import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import {
  incrementCounter,
  decrementCounter
} from "../redux/actions/counterActions";
class App extends React.Component {
  handleIncrement = () => {
    this.props.dispatch(incrementCounter());
  };
  handleDecrement = () => {
    this.props.dispatch(decrementCounter());
  };
  render() {
    return (
      <Counter
        handleIncrement={this.handleIncrement}
        handleDecrement={this.handleDecrement}
        counter={this.props.counter}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state
  };
};

export default connect(mapStateToProps)(App);
