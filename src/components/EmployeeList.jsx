import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [message, setMessage] = useState('');

  // Load employee list on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/employee');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(`Are you sure you want to delete Employee ID ${id}?`);
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:8080/employee/${id}`);
      setMessage(`Employee ID ${id} deleted successfully.`);
      fetchEmployees(); // Refresh list
    } catch (error) {
      console.error('Error deleting employee:', error);
      setMessage('Error deleting employee.');
    }
  };

  return (
    <div style={{ maxWidth: '1700px', margin: '0 auto' }}>
        <Layout></Layout>
      <h2>Employee List</h2>
      {message && <p>{message}</p>}
      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp.employeeid}>
                <td>{emp.employeeid}</td>
                <td>{emp.employeename}</td>
                <td>{emp.salary}</td>
                <td>
                  <Link to={`/update-employee/${emp.employeeid}`}>
                    <button>Edit</button>
                  </Link>
                  &nbsp;
                  <button onClick={() => handleDelete(emp.employeeid)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No employees found.</td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
      <Link to="/add-employee">
        <button>Add New Employee</button>
      </Link>
    </div>
  );
};

export default EmployeeList;
