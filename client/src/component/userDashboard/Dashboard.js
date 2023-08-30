import { useState } from 'react'
import Comment from './comment'
import Sidebar from './SideBar'
import Bookings from './bookings'
import Overview from './overview'
import Profile from './profile'
import Settings from "./settings"

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
          return <Comment />;
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
