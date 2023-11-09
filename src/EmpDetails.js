import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function EmpDetails() {
  const { empid } = useParams();
  const [empdata, empdatachange] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/employee/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((res) => empdatachange(res))
      .catch((err) => {
        //   console.log(err.message);
      });
  }, [empid]);
  return (
    <div style={{ textAlign: "left", margin: "20px" }}>
      <div className="card-title">
        <h2>Employee Details:</h2>
      </div>
      <div className="card-body">
        <h4>Employ id: {empdata.id}</h4>
        <h4>The Employee name : {empdata.name} ,</h4>
        <h4>Email: {empdata.email}</h4>
        <h4>Phone: {empdata.phone}</h4>
        <h4>Sports: {empdata.sports}</h4>
        <Link to="/" className="btn btn-danger">
          Back to Listing
        </Link>
      </div>
    </div>
  );
}

export default EmpDetails;
