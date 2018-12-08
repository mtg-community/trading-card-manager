import React from 'react';

export const CounterComponent = ({ handleDecrement, handleIncrement, counter }) => {
    return (
        <React.Fragment>
            <button onClick={handleIncrement}>Increment</button>
            <p>{counter}</p>
            <button onClick={handleDecrement}>Decrement</button>
        </React.Fragment>
    );
}