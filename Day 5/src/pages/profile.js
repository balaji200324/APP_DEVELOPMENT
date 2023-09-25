import React from 'react';
import { useSelector } from 'react-redux';
import '../assets/css/profile.css';

const Profile = () => {
  // Fetch user data from Redux store
  const { username, email, orders, inventorySpace, totalShipping, remainingShipping } = useSelector((state) => state.user);

  return (
    <div className="profile-container">
      <h1>Welcome, {username}!</h1>
      <div className="profile-details">
        <p>Email: {email}</p>
        <p>Orders: {orders}</p>
        <p>Inventory Space: {inventorySpace} sq. ft.</p>
        <p>Total Shipping: ${totalShipping}</p>
        <p>Remaining Shipping: ${remainingShipping}</p>
      </div>
    </div>
  );
};

export default Profile;
