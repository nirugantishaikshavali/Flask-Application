import React from 'react';
 
const Table = ({ emp_Data }) => {
    console.log("Employee Data", emp_Data);
 
    return (
        <div style={{ margin: "10px", width: '100%' }}>
            <table className='table table-bordered mt-5' style={{ tableLayout: 'fixed', width: '100%' }}>
                <thead>
                    <tr>
                        <th>City</th>
                        <th >Email</th>
                        <th >Employee Number</th>
                        <th>Extension</th>
                        <th >First Name</th>
                        <th >Job Title</th>
                        <th >Last Name</th>
                        <th >Office Code</th>
                        <th >Phone</th>
                        <th >Reports To</th>
                        <th >Report To First Name</th>
                        <th >Report To Last Name</th>
                    </tr>
                </thead>
            </table>
            <div style={{ maxHeight: '500px', overflow: 'auto', width: '100%' }}>
                <table className='table table-bordered' style={{ tableLayout: 'fixed', width: '100%' }}>
                    <tbody>
                        {
                            emp_Data.length > 0 ? (
                                emp_Data.map((item, i) => (
                                    <tr key={i}>
                                        <td >{item["city"]}</td>
                                        <td >{item["email"]}</td>
                                        <td >{item["employeenumber"]}</td>
                                        <td >{item["extension"]}</td>
                                        <td >{item["firstname"]}</td>
                                        <td >{item["jobtitle"]}</td>
                                        <td >{item["lastname"]}</td>
                                        <td >{item["officecode"]}</td>
                                        <td >{item["phone"]}</td>
                                        <td >{item["reportsto"]}</td>
                                        <td >{item["reporttofirstname"]}</td>
                                        <td >{item["reporttolastname"]}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={"12"} className='text-center'>No data available</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
 
export default Table;