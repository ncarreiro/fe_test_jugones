import "./Modal.css";

import React, { PureComponent } from "react";

class Modal extends PureComponent {
  render() {
    const { closeModal, children } = this.props;
    return (
      <div className="App-modal">
        <div className="App-modal-content">
          {children}
          <button className="App-modal-close-button" onClick={closeModal}>
            Cerrar
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
