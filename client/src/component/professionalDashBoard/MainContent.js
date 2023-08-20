import React from 'react';
import './MainContent.css';
// import styles from './MainContent.module.css';

const MainContent = ({ activeItem }) => {
  return (
    <div className="main-content">
      <p>This is the {activeItem} page content.</p>
    </div>
  );
}

export default MainContent;
