import React, { useEffect, useState } from 'react'

import './App.scss'
import Sidenav from './components/sidenav';
import Ecommerce from './pages/ecommerce';

function App() {
  return (
    <div className="main-body">
      <Sidenav />
      <div className="main-content">
        <Ecommerce />
      </div>
    </div>
    
  );
}

export default App
