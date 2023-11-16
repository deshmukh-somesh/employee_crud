import React from "react";
import { Modal, Button } from "react-bootstrap";

const SuccessModal = ({ showModal, handleModalClose }) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Saved successfully!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SuccessModal;
