import React from 'react';

class Counter extends React.Component {
  render() {
    const { handleDecrement, handleIncrement, counter } = this.props;
    return (
      <React.Fragment>
        <button onClick={handleIncrement}>Increment</button>
        <p>{counter}</p>
        <button onClick={handleDecrement}>Decrement</button>
      </React.Fragment>
    );
  }
}

export default Counter;
