import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SuccessModal from "./Modal/SuccessModal";

const EmpCreate = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sports, setSports] = useState("");
  const [active, setActive] = useState(false);
 
  const [validation, setValidation] = useState(false);
  // state to handle the modal
  const [showModal,setShowModal] = useState(false);
  const navigate = useNavigate();


  // function to close the modal 
  const handleModalClose = ()=>{
    setShowModal(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({id,name,email,phone,sports,active})
    const empdata = { name, email, phone, sports, active };
    // now we will apply the post request on the db as follows:
    fetch(" http://localhost:8000/employee/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        // alert("saved successfully.");
setShowModal(true);
console.log("executed")
        // navigate("/");


        // we have to revert back to the employee listing page
        // we make use of navigator hook
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Create Employee</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  {/* <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      />
                    </div>
                  </div> */}
                  {/* 2nd field for name */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        id="name"
                        value={name}
                        onMouseDown={(e) => setValidation(true)}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                        required
                      />
                      {name.length == 0 && validation && (
                        <span className="text-danger">Enter the name </span>
                      )}
                    </div>
                  </div>
                  {/* 3rd filed for email */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/* 4th field for Phone */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="form-control"
                        required
                      />
                    </div>
                  </div>
                  {/* 5th field for sports */}
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="sports">Sports</label>
                      <input
                        id="sports"
                        value={sports}
                        onChange={(e) => setSports(e.target.value)}
                        className="form-control"
                        // required
                      />
                    </div>
                  </div>

                  {/* checked value */}
                  <div className="col-lg-12">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        checked={active}
                        className="form-check-input"
                        onChange={(e) => {
                          console.log("chekcbox change:" , e.target.checked);
                          setActive(e.target.checked)}
                        }
                         
                      />
                      {/* <input type="checkbox" className="form-check-input" onChange={e=>setName(e.target.checked)}></input> */}
                      <label className="form-check-label">Is Active</label>
                    </div>
                  </div>
                  {/* adding save and back button */}
                  <div className="col-lg-12 ctn1" >
                    <div className=" form1" >
                      <button className="btn btn-success btn1" type="submit">
                        Save
                      </button>
                      {/* <button className="btn btn-danger" type="submit">Back</button> */}
                      <Link to="/" className="btn btn-primary backbtn">
                        Back to List
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <SuccessModal showModal={showModal} handleModalClose = {handleModalClose}></SuccessModal>
    </div>
  );
};

export default EmpCreate;
