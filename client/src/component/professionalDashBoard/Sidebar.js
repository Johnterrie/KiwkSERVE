import React from 'react';
import './Sidebar.css';

const Sidebar = ({ setActiveItem, activeItem }) => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li
          className={activeItem === 'Home' ? 'active' : ''}
          onClick={() => setActiveItem('Home')}
        >
          Home
        </li>
        <li
          className={activeItem === 'Profile' ? 'active' : ''}
          onClick={() => setActiveItem('Profile')}
        >
          Profile
        </li>
        <li
          className={activeItem === 'Settings' ? 'active' : ''}
          onClick={() => setActiveItem('Settings')}
        >
          Settings
        </li>
        <li
          className={activeItem === 'Account' ? 'active' : ''}
          onClick={() => setActiveItem('Account')}
        >
          Account
        </li>
        <li
          className={activeItem === 'Customers' ? 'active' : ''}
          onClick={() => setActiveItem('Customers')}
        >
          Customers
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

