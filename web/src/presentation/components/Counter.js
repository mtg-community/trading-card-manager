import React from 'react';

export const CounterComponent = ({ handleDecrement, handleIncrement, counter, handleChangeLocale}) => {
    return (
        <React.Fragment>
            <button onClick={handleIncrement}>Increment</button>
            <p>{counter}</p>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleChangeLocale}>En</button>
        </React.Fragment>
    );
};
