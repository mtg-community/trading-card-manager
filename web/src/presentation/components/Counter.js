import React from 'react';
import { Link } from 'react-router-dom';
import { Modal } from './Modal';
import PropTypes from 'prop-types';

export const CounterComponent = ({
  handleDecrement,
  handleIncrement,
  counter,
  handleChangeLocaleToPt,
}) => {
  return (
    <React.Fragment>
      <button onClick={handleIncrement}>Increment</button>
      <p>{counter}</p>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleChangeLocaleToPt}>Pt</button>
      <Link to="private">Go to private!</Link>
      <Modal Trigger={<button>Open Modal</button>} title="modal.title">
        modal.content
      </Modal>
    </React.Fragment>
  );
};

CounterComponent.propTypes = {
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  handleChangeLocaleToPt: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
};

CounterComponent.displayName = 'Counter';
