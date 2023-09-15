import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../assests/css/Register.css'

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    dob: '',
    mobileNumber: '',
  });

  const [isMobileNumberValid, setIsMobileNumberValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMobileChange = (value) => {
    const mobileNumberString = String(value);

    setFormData({
      ...formData,
      mobileNumber: mobileNumberString,
    });

    setIsMobileNumberValid(isValidPhoneNumber(mobileNumberString));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        toast.error('All fields are required.');
        return;
      }
    }

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Invalid email address.');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      toast.error(
        'Password must contain a capital letter, symbol, and numbers (at least 8 characters).'
      );
      return;
    }

    if (!isMobileNumberValid) {
      toast.error('Invalid phone number.');
      return;
    }

    toast.success('Sign up successful!');
  };

  return (
    <div className="signup-container">
      <div className="background-register"></div>
      <div className="registration-form">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Mobile Number:</label>
            <PhoneInput
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleMobileChange}
              defaultCountry="US"
              required
            />
            {!isMobileNumberValid && (
              <div className="error-message">Invalid phone number.</div>
            )}
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="login-link">
          <Link to="/">Login</Link>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
