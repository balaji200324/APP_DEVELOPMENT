import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from '../components/actions/authActions';
import '../assests/css/Login.css';
import bubbleImage from '../assests/img/bubble.png';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

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
        const user = { email: formData.email, role: selectedRole };
        dispatch(loginSuccess(user));
        toast.success('Customer login successful!', { autoClose: 2000 });
        navigate('/dashboard/customer');
      } else if (selectedRole === 'admin') {
        const admin = { email: formData.email, role: selectedRole };
        dispatch(loginSuccess(admin));
        toast.success('Admin login successful!', { autoClose: 2000 });
        navigate('/AdminDashboard');
      } else if (selectedRole === 'vendor') {
        const vendor = { email: formData.email, role: selectedRole };
        dispatch(loginSuccess(vendor));
        toast.success('Vendor login successful!', { autoClose: 2000 });
        navigate('/dashboard/vendor');
      }
    }
  };

  return (
    <div className="logContainer">
    <div className="login-container">
      <div className="bubble">
        <img
          src={bubbleImage}
          alt="Bubble 1"
          style={{ width: '3%', animationDelay: '2s' }}
        />
        <img
          src={bubbleImage}
          alt="Bubble 2"
          style={{ width: '3%', animationDelay: '1s' }}
        />
        <img
          src={bubbleImage}
          alt="Bubble 3"
          style={{ width: '3%', animationDelay: '3s' }}
        />
        <img
          src={bubbleImage}
          alt="Bubble 4"
          style={{ width: '3%', animationDelay: '4.5s' }}
        />
        <img
          src={bubbleImage}
          alt="Bubble 5"
          style={{ width: '3%', animationDelay: '3s' }}
        />
        <img
          src={bubbleImage}
          alt="Bubble 6"
          style={{ width: '3%', animationDelay: '6s' }}
        />
        <img
          src={bubbleImage}
          alt="Bubble 7"
          style={{ width: '3%', animationDelay: '7s' }}
        />
      </div>
      <div className="login-box">
        <center>
          <h1 className="login-title">Login</h1>
        </center>
        <form>
          <div className="logform-group">
            <label className="log-form-label">Email:</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="logform-group">
            <label className="log-form-label">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="logform-group">
            <label className="log-form-label">Role:</label>
            <select
              name="role"
              value={selectedRole}
              onChange={handleRoleChange}
              className="select-control"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
          <div className="button-container">
            <button type="button" onClick={handleLogin} className="button">
              Login
            </button>
          </div>
        </form>
        <div className="login-links">
          {selectedRole === 'customer' && (
            <p>
              <Link to="/Register" className="link">
                Sign Up
              </Link>
            </p>
          )}
          <p>
            <Link to="/forgot-password" className="link">
              Forgot your password?
            </Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    </div>
    </div>
  );
};

export default Login;
