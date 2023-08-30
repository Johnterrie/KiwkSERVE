import React from 'react';
import './App.css';
import './Styles-two.css'; 
import Dashboard from './Dashboard';


import './Styles-two.css'; 


function App({data}) {

  console.log(data)
  
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;


