import React, { useState } from 'react';

const employeesData = [
  { id: 1, name: 'Balaji', position: 'Software Engineer' },
  { id: 2, name: 'Harish Kumar', position: 'Product Manager' },
  { id: 3, name: 'Dhanush', position: 'UI Designer' },
];

const Employees = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [searchText, setSearchText] = useState('');
  const [editableEmployee, setEditableEmployee] = useState(null);

  const handleSearch = () => {
    const filteredEmployees = employeesData.filter((employee) =>
      employee.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setEmployees(filteredEmployees);
  };

  const handleReset = () => {
    setEmployees(employeesData);
    setSearchText('');
  };

  const handleEdit = (employee) => {
    setEditableEmployee(employee);
  };

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleSave = () => {
    setEditableEmployee(null);
  };

  const styles = {
    container: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '20px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    searchContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    searchInput: {
      padding: '8px',
      marginRight: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    actionButton: {
      padding: '8px 16px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginLeft: '10px',
      background: '#007BFF',
      color: '#fff',
      border: 'none',
    },
    resetButton: {
      background: '#ccc',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    tableHeader: {
      backgroundColor: '#f0f0f0',
      borderBottom: '1px solid #ddd',
      padding: '10px',
      textAlign: 'left',
      fontWeight: 'bold',
    },
    tableCell: {
      borderBottom: '1px solid #ddd',
      padding: '10px',
      textAlign: 'left',
    },
    editSection: {
      marginTop: '20px',
      textAlign: 'left',
    },
    editInput: {
      padding: '8px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Employee Management</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={styles.searchInput}
        />
        <button onClick={handleSearch} style={styles.actionButton}>
          Search
        </button>
        <button onClick={handleReset} style={{ ...styles.actionButton, ...styles.resetButton }}>
          Reset
        </button>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>ID</th>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Position</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td style={styles.tableCell}>{employee.id}</td>
              <td style={styles.tableCell}>{employee.name}</td>
              <td style={styles.tableCell}>{employee.position}</td>
              <td style={styles.tableCell}>
                <button onClick={() => handleEdit(employee)} style={styles.actionButton}>
                  Edit
                </button>
                <button onClick={() => handleDelete(employee.id)} style={styles.actionButton}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editableEmployee && (
        <div style={styles.editSection}>
          <h2>Edit Employee</h2>
          <input
            type="text"
            placeholder="Name"
            value={editableEmployee.name}
            onChange={(e) =>
              setEditableEmployee({ ...editableEmployee, name: e.target.value })
            }
            style={styles.editInput}
          />
          <input
            type="text"
            placeholder="Position"
            value={editableEmployee.position}
            onChange={(e) =>
              setEditableEmployee({ ...editableEmployee, position: e.target.value })
            }
            style={styles.editInput}
          />
          <button onClick={handleSave} style={styles.actionButton}>
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default Employees;
