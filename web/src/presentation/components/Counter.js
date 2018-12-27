import React from 'react';
import { Link } from 'react-router-dom';

export const CounterComponent = ({ handleDecrement, handleIncrement, counter, handleChangeLocaleToPt }) => {
    return (
        <React.Fragment>
            <button onClick={handleIncrement}>Increment</button>
            <p>{counter}</p>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleChangeLocaleToPt}>Pt</button>
            <Link to='private'>Go to private</Link>
        </React.Fragment>
    );
};
