import React, { useState } from 'react';
import axios from 'axios';
import Layout from './Layout';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    employeeid: '',
    employeename: '',
    salary: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/employee', {
        ...employee,
        salary: parseFloat(employee.salary),
        employeeid: parseInt(employee.employeeid)
      });
      setMessage('Employee saved successfully!');
      console.log(response.data);
      setEmployee({ employeeid: '', employeename: '', salary: '' });
    } catch (error) {
      console.error('Error saving employee:', error);
      setMessage('Error saving employee.');
    }
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Layout></Layout>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input
            type="number"
            name="employeeid"
            value={employee.employeeid}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Employee Name:</label>
          <input
            type="text"
            name="employeename"
            value={employee.employeename}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            step="0.01"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Save Employee</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default EmployeeForm;
