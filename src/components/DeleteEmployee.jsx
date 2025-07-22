import React, { useState } from 'react';
import axios from 'axios';
import Layout from './Layout';

const DeleteEmployeeById = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!employeeId) {
      setMessage('Please enter an employee ID.');
      return;
    }

    try {
      await axios.delete(`http://localhost:8080/employee/${employeeId}`);
      setMessage(`Employee ID ${employeeId} deleted successfully.`);
      setEmployeeId('');
    } catch (error) {
      console.error('Error deleting employee:', error);
      setMessage('Employee not found or deletion failed.');
    }
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        <Layout></Layout>
      <h2>Delete Employee</h2>
      <form onSubmit={handleDelete}>
        <div>
          <label>Employee ID:</label>
          <input
            type="number"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            required
          />
        </div>
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteEmployeeById;
