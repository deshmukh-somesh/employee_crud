import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RemoveConfirmationModal from "./Modal/RemoveConfirmationModal";
// import { Modal, Button } from "bootstrap";
import EmpDetails from "./EmpDetails";
const EmpListing = () => {
  // useful
  const [empdata, empdatachange] = useState(null);
  // usefull
  const [targetEmployeeId, setTargetEmployeeId] = useState(null);
  // usefull for showing the details
  const [showModal, setShowModal] = useState(false);
  // set for showing the removing an employ
  const [removeConfirm, setRemoveConfirm] = useState(false);

  const navigate = useNavigate();
  // this is dealing with the edit modal
  const closeModal1 = () => {
    setShowModal(false);
    console.log("modal closed");
  };
  // this is dealing with removing the employee modal
  const closeModal3 = () => {
    setRemoveConfirm(false);
    console.log("modal closed");
  };
  const LoadDetail = (id) => {
    setTargetEmployeeId(id);
    console.log("working");
    console.log(id);
  };

  // new code
  const Deletedetail = (id) => {
    setTargetEmployeeId(id);
    console.log(id);
    setRemoveConfirm(true);
  };

  // end of new code

  // const Deletedetail = (id) => {
  //   if (window.confirm("Do you want to remove?")) {
  //     fetch(" http://localhost:8000/employee/" + id, {
  //       method: "DELETE",
  //     })
  //       .then((res) => {

  //         // alert("removed  successfully.");

  //         // navigate("/");
  //         // we are alrady in listing page we need to refrech our page.
  //         // window.location.reload();

  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  //   }
  //   // navigate("/employee/detail/" + id);
  // };

  // 2nd version of code
  // new code to handle the deletion

  // end of new code

  // // new code to handle the deletion

  const handleRemove = () => {
    fetch(`http://localhost:8000/employee/${targetEmployeeId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("the data for success: " + data.success);
        if (data.success) {
          console.log("Removal successful");
          // alert("Removed successfully");
          // first doubt that the app may fail
          // window.location.reload();
        } else {
          // console.log("Removal failed:", data.message);

          window.location.reload();
        }
      })
      .catch((err) => {
        console.log("Error:", err.message);
      })
      .finally(() => {
        setShowModal(false);
      });
  };

  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id);
  };

  useEffect(() => {
    fetch("http://localhost:8000/employee/")
      .then((res) => {
        return res.json();
      })
      .then((res) => empdatachange(res))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  console.log();
  return (
    <>
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn" style={{ float: "left" }}>
            <Link
              to="/employee/create"
              style={{ marginLeft: "0px" }}
              className="btn btn-success"
            >
              Add New (+)
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Sports</td>
                <td>isActive</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.sports}</td>
                    <td>
                      <span
                        className={`status-indicator ${
                          item.active ? "active" : "inactive"
                        }`}
                      ></span>
                      {item.active ? "Active" : "Inactive"}
                    </td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Deletedetail(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                          setShowModal(true);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* employ details  */}
      <EmpDetails
        showModal2={showModal}
        closeModal2={closeModal1}
        empdata1={empdata}
        targetEmployeeId1={targetEmployeeId}
        // LoadDetail1 = {LoadDetail}
      ></EmpDetails>
      {/* remove confirmation modal  */}
      <RemoveConfirmationModal
        show={removeConfirm}
        // intial value of show is false
        handleClose={() => setRemoveConfirm(false)}
        handleConfirm={handleRemove}
      />
      {/* remove successful modal  */}
    </>
  );
};

export default EmpListing;
