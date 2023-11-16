import React from "react";
import { Modal, Button } from "react-bootstrap";

function EmpDetails(props) {
  const { showModal2, closeModal2, empdata1, targetEmployeeId1 } = props;

  const targetEmployee =
    empdata1 && empdata1.find((employee) => employee.id === targetEmployeeId1);
  
  return (
    <div>
      <Modal show={showModal2} onHide={closeModal2}>
        <Modal.Header>
          <h2>Employee Details</h2>
          <Button className="btn btn-danger" onClick={closeModal2}>
            X
          </Button>
        </Modal.Header>
        <Modal.Body>
          <>
            {targetEmployee ? (
              <div key={targetEmployee.id}>
                <h5>id: {targetEmployee.id}</h5>
                <h5>name: {targetEmployee.name}</h5>
                <h5>email: {targetEmployee.email}</h5>
                <h5>phone: {targetEmployee.phone}</h5>
                <h5>sports: {targetEmployee.sports}</h5>
                {/* Add any additional details you want to display */}
              </div>
            ) : (
              <p>No Employee found</p>
            )}
          </>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={closeModal2} variant="danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EmpDetails;
