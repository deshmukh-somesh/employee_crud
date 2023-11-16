import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpCreate from "./EmpCreate";
import EmpEdit from "./EmpEdit";
// import EmpDetails from "./EmpDetails";
function App() {
  return (
    <div className="App">
      <h1>REACT JS CRUD OPERATION</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/employee/create" element={<EmpCreate />}></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit />}></Route>
          {/* <Route path="/:empid" element={<EmpDetails />}></Route> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
