// RemoveConfirmationModal.js
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RemoveConfirmationModal = ({ show, handleClose, handleConfirm }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Removal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to remove this item?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm}>
          Remove
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveConfirmationModal;
