import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar, faCog, faUsers, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ setPage }) => {
  return (
    <div className="sidebar">
      <ul>
      {/* <li className="sidebar-name">Welcome to Kwik Dashboard</li> */}
        <li onClick={() => setPage('overview')}>
          <FontAwesomeIcon icon={faHome} /> Overview
        </li>
        <li onClick={() => setPage('Bookings')}>
          <FontAwesomeIcon icon={faUsers} /> Bookings
        </li>
        <li onClick={() => setPage('Profile')}>
          <FontAwesomeIcon icon={faChartBar} /> Profile
        </li>
        <li onClick={() => setPage('messages')}>
          <FontAwesomeIcon icon={faEnvelope} /> Messages
        </li>
        <li onClick={() => setPage('Settings')}>
          <FontAwesomeIcon icon={faCog} /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
