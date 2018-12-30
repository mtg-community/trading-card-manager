import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './styles/Modal.css';

class ModalContent extends React.Component {
  containerRef = React.createRef();

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    content: PropTypes.node.isRequired,
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
    const { onClose, content } = this.props;

    return (
      <div
        id="modal-portal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog_label"
        aria-describedby="dialog_desc"
        className="c-modal-backdrop"
      >
        <div className="c-modal" ref={this.containerRef}>
          <h2 id="dialog_label">Title</h2>
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
          <div id="dialog_desc" className="c-modal__body">
            {content}
          </div>
        </div>
      </div>
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

export class Modal extends React.Component {
  state = {
    isOpen: false,
  };

  static defaultProps = {};

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
    const { children, Trigger } = this.props;

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
          content={children}
          isOpen={isOpen}
        />
      </Fragment>
    );
  }
}
