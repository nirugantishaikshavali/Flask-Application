import React from 'react';
import {Route,Routes,BrowserRouter} from "react-router-dom"
import EmployeePage from './Components/EmployeePage';
import NavBar from "./Components/NavBar"
import Logout from './Components/Logout';

const App = () => {
  return (

    <div>

      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<EmployeePage/>}/>
        <Route path="/logout" element={<Logout/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;