import React, { useState, useEffect } from 'react';
// import { get_Employee_Data } from './Components/api';
import { get_Employee_Data } from './api';
// import Table from './Components/Table';
import Table from './Table';
import "bootstrap/dist/css/bootstrap.min.css";
 
const EmployeePage = () => {
  let [employeeData, setEmployeeData] = useState([]);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState('');
 
  useEffect(() => {
    fetchEmployeeData();
  }, []);
 
  const fetchEmployeeData = async () => {
    try {
      setLoading(true);
      let data = await get_Employee_Data();
      if (data && data.length > 0) {
        setEmployeeData(data);
      }
      setLoading(false);

    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };
 
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="text-primary" style={{fontSize:"100px"}}>Loading.......</div>
      </div>
    );
  }
 
  if (error) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="text-danger" style={{fontSize:"100px"}}>Error.......</div>
      </div>
    );
  }
 
  return (
    <div className="d-flex flex-column  align-items-center" style={{ height: "100vh" }}>
      <h1 className="text-primary mt-5">Employees Data</h1>
      <Table emp_Data={employeeData} />
    </div>
  );
};
 
export default EmployeePage;