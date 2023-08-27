import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Overview from './Overview';
import Profile from './Profile';
import Settings from './Settings';
import Bookings from './Bookings';
import Messages from './Messages'; 

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('overview');

  const renderPage = () => {
    switch (currentPage) {
      case 'overview':
        return <Overview />;
        case 'Bookings': 
        return <Bookings />;
      case 'Profile':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      case 'messages': 
        return <Messages />;
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar setPage={setCurrentPage} /> 
      <div className="content">
        {renderPage()}
      </div>
    </div>
  );
};

export default Dashboard;


