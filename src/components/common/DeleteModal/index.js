import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const DeleteModal = ({ wrapperRef, setIsShown, onDelete }) => {
  return (
    <Modal
      show
      backdrop="static"
    >
      <div ref={wrapperRef}>
        <Modal.Header>
          <Modal.Title>Delete post?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            This can’t be undone and it will be removed from your profile,
            the timeline of any accounts that follow you, and from search results.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-outline-secondary"
            onClick={() => setIsShown(false)}
          >
            Cancel
          </Button>
          <Button
            className="btn btn-danger"
            onClick={() => onDelete()}
          >
            Delete
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  )
}

export default DeleteModal;