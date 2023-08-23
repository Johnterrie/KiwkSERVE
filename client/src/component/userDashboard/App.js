import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

function App() {
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <div className="dashboard">
      <Sidebar setActiveItem={setActiveItem} activeItem={activeItem} />
      <div className="content">
        <Header activeItem={activeItem} />
        <MainContent activeItem={activeItem} />
      </div>
    </div>
  );
}

export default App;


