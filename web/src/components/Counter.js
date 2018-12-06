import React from "react";

class Counter extends React.Component {
  render() {
    const { handleDecrement, handleIncrement, counter } = this.props;
    return (
      <div>
        <div>
          <button onClick={() => handleIncrement()}>Increment</button>
          <p>{counter}</p>
          <button onClick={() => handleDecrement()}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default Counter;
