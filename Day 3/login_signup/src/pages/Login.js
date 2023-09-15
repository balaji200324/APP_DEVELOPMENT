import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import '../assests/css/Login.css'

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [selectedRole, setSelectedRole] = useState('customer');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleLogin = () => {
    const { email, password } = formData;

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;

    if (!email || !password) {
      toast.error('Both email and password are required.');
    } else if (!emailRegex.test(email)) {
      toast.error('Invalid email address.');
    } else if (!passwordRegex.test(password)) {
      toast.error(
        'Password must contain a capital letter, symbol, and numbers (at least 8 characters).'
      );
    } else {
      if (selectedRole === 'customer') {
        toast.success('Customer login successful!', { autoClose: 2000 });
        navigate('/dashboard/customer');
      } else if (selectedRole === 'admin') {
        toast.success('Admin login successful!', { autoClose: 2000 });
        navigate('/dashboard/admin');
      } else if (selectedRole === 'manager') {
        toast.success('Manager login successful!', { autoClose: 2000 });
        navigate('/dashboard/manager');
      } else if (selectedRole === 'supplier') {
        toast.success('Supplier login successful!', { autoClose: 2000 });
        navigate('/dashboard/supplier');
      } else if (selectedRole === 'employee') {
        toast.success('Employee login successful!', { autoClose: 2000 });
        navigate('/dashboard/employee');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="background-login"></div>
      <div className="login-page">
        <h1>Login</h1>
        <form>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <select name="role" value={selectedRole} onChange={handleRoleChange}>
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="supplier">Supplier</option>
              <option value="employee">Employee</option>
            </select>
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="login-links">
          <p>
            <Link to="/Register">Sign Up</Link>
          </p>
          <p>
            <Link to="/forgot-password">Forgot your password?</Link>
          </p>
        </div>
        <ToastContainer />
        
      </div>
    </div>
  );
};

export default Login;
