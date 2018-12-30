import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './styles/Modal.css';

export class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    Trigger: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
  };

  onTrigger = event => {
    // Prevent event to bubble up to Modal, which cause it to close;
    event && event.stopPropagation();
    this.setState({ isOpen: true });
  };

  onClose = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { children, Trigger, title } = this.props;

    return (
      <Fragment>
        <div
          tabIndex="0"
          role="button"
          onClick={this.onTrigger}
          onKeyPress={this.onTrigger}
        >
          {Trigger}
        </div>
        <ModalPortal
          onClose={this.onClose}
          title={title}
          content={children}
          isOpen={isOpen}
        />
      </Fragment>
    );
  }
}

const ModalPortal = props => {
  const { isOpen, ...rest } = props;

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(<ModalContent {...rest} />, document.body);
};

ModalPortal.displayName = 'ModalPortal';

class ModalContent extends React.Component {
  containerRef = React.createRef();

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    content: PropTypes.node.isRequired,
    title: PropTypes.string,
  };

  onClickOutsideHandler = event => {
    const { containerRef } = this;
    if (
      containerRef.current &&
      containerRef.current.contains &&
      !containerRef.current.contains(event.target)
    ) {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('click', this.onClickOutsideHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickOutsideHandler);
  }

  render() {
    const { onClose, content, title } = this.props;

    return (
      <div
        role="dialog"
        id="modal-portal"
        aria-modal="true"
        className="modal__backdrop"
        aria-labelledby="dialog_label"
        aria-describedby="dialog_desc"
      >
        <div className="modal" ref={this.containerRef}>
          <h2 id="dialog_label">{title}</h2>
          <button
            className="modal__close-button"
            aria-label="Close Modal"
            onClick={onClose}
            onKeyDown={onClose}
          >
            <span className="u--hide-visually">Close</span>
            <svg className="modal__close-button-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div id="dialog_desc" className="modal__body">
            {content}
          </div>
        </div>
      </div>
    );
  }
}
