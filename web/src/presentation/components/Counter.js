import React from 'react';

function Counter(props) {
  const { handleDecrement, handleIncrement, counter } = props;
  return (
    <React.Fragment>
      <button onClick={handleIncrement}>Increment</button>
      <p>{counter}</p>
      <button onClick={handleDecrement}>Decrement</button>
    </React.Fragment>
  );
}

export default Counter;
