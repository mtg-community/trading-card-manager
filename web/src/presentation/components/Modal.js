import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.css';

export const ModalTrigger = ({ onOpen, text }) => (
  <button className="c-btn" onClick={onOpen}>
    {text}
  </button>
);
export const ModalContent = ({ onClose, content }) => {
  return ReactDOM.createPortal(
    <div
      id="modal-portal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog_label"
      aria-describedby="dialog_desc"
      className="c-modal-cover"
    >
      <div className="c-modal">
        <button
          className="c-modal__close"
          aria-label="Close Modal"
          onClick={onClose}
        >
          <span className="u-hide-visually">Close</span>
          <svg className="c-modal__close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </button>
        <div className="c-modal__body">{content}</div>
      </div>
    </div>,
    document.body,
  );
};

export class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  onOpen = () => {
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { text, children } = this.props;
    return (
      <Fragment>
        <ModalTrigger onOpen={this.onOpen} text={text} />
        {isOpen && <ModalContent onClose={this.onClose} content={children} />}
      </Fragment>
    );
  }
}
