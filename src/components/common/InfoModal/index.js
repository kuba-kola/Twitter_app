import React from 'react';
import Modal from 'react-bootstrap/Modal';

const InfoModal = ({ wrapperRef }) => {
  return (
    <Modal
      show 
      backdrop="static"
    >
      <div ref={wrapperRef}>
        <Modal.Header>
          <Modal.Title>Modal Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This logic has not yet been added
          </p>
        </Modal.Body>
      </div>
    </Modal>
  )
}

export default InfoModal;