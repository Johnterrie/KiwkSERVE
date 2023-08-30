import { useState } from 'react'
import Comment from './comment'
import Sidebar from './SideBar'
import Bookings from './bookings'
import Overview from './overview'
import Profile from './profile'
import Settings from "./settings"

const Dashboard = ({professionals, user, pending, completed}) => {
    const [currentPage, setCurrentPage] = useState('overview');
  

    const renderPage = () => {
      switch (currentPage) {
        case 'overview':
          return <Overview user={user} pending = {pending} completed = {completed} />;
          case 'Bookings': 
          return <Bookings user={user}  professionals = {professionals} />;
        case 'Profile':
          return <Profile user = {user} />;
        case 'Settings':
          return <Settings user={user} />;
        case 'messages': 
          return <Comment user={user} />;
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
