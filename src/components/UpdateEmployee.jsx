import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from './Layout';

const UpdateEmployee = () => {
  const { id } = useParams(); // employee ID from URL
  const [employee, setEmployee] = useState({
    employeename: '',
    salary: ''
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Load existing employee data
    axios.get(`http://localhost:8080/employees/${id}`)
      .then(response => setEmployee(response.data))
      .catch(error => console.error('Error loading employee:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/employee/${id}`, {
        ...employee,
        salary: parseFloat(employee.salary)
      });
      setMessage('Employee updated successfully!');
    } catch (error) {
      console.error('Error updating employee:', error);
      setMessage('Update failed.');
    }
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Layout></Layout>
      <h2>Update Employee</h2>
      <form onSubmit={handleUpdate}>
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
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Employee</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default UpdateEmployee;
