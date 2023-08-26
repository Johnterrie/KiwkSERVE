import React from 'react';
import '../professionalDashBoard/Sidebar.css';

const Sidebar = ({ setActiveItem, activeItem }) => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li
          className={activeItem === 'Home' ? 'active' : ''}
          onClick={() => setActiveItem('Overview')}
        >
          Overview
        </li>
        <li
          className={activeItem === 'Profile' ? 'active' : ''}
          onClick={() => setActiveItem('Profile')}
        >
          Profile
        </li>
        <li
          className={activeItem === 'Settings' ? 'active' : ''}
          onClick={() => setActiveItem('Bookings')}
        >
          Bookings
        </li>
        <li
          className={activeItem === 'Customers' ? 'active' : ''}
          onClick={() => setActiveItem('Professionals')}
        >
          Professionals
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

