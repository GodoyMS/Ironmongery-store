/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import Admin from './Admin/Admin';
import App from './App';
import Homepage from './Homepage/Homepage'
const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    
    <Homepage/>

    
  
  </React.StrictMode>

);  
*/


import React, { Component, StrictMode } from 'react';
import Homepage from './Homepage/Homepage'
import ReactDOM from 'react-dom/client';
import App from './App';






const root=ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App/>
 </React.StrictMode>
)

//render(<App/> , document.getElementById('app'));

