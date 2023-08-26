import React from 'react';
import '../professionalDashBoard/Header.css';

const Header = ({ activeItem }) => {
  return (
    <div className="header">
      <h1>{activeItem}</h1>
    </div>
  );
}

export default Header;
