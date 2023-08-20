import React from 'react';
import './Header.css';

const Header = ({ activeItem }) => {
  return (
    <div className="header">
      <h1>{activeItem}</h1>
    </div>
  );
}

export default Header;
