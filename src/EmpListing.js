import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const EmpListing = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();
  const LoadDetail = (id) => {
    console.log("working");
    navigate("/employee/detail/" + id);
  };
  const Deletedetail = (id) => {
    if(window.confirm("Do you want to remove?")){
      fetch(" http://localhost:8000/employee/"+id, {
      method: "DELETE",
      
    })
      .then((res) => {
        alert("removed  successfully.");
        // navigate("/");
        // we are alrady in listing page we need to refrech our page.
        window.location.reload();

        // we have to revert back to the employee listing page
        // we make use of navigator hook
      })
      .catch((err) => {
        console.log(err.message);
      });
    }
    // navigate("/employee/detail/" + id);
  
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
  return (
    <>
      <div className="card">
        <div className="card-title">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn" style={{ float: "left" }}>
            <Link to="/employee/create" className="btn btn-success">
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
    </>
  );
};

export default EmpListing;
