import React, { useEffect, useState } from 'react'; 
import './main.scss'; 
import erupsiLogo from '@assets/images/erupsi-icon.png';

function Sidenav(){
    return(
        <nav className=' rounded-4xl'>
            <div className='nav_header'>
                <img src={erupsiLogo} alt="" />
                <h1>ERUPSI-ERP</h1>
                <h2>Asset Management Platform</h2>
            </div>
            <div>
                <ul>
                    <li>Dashboard</li>
                    <li>Products</li>
                    <li>Sales</li>
                    <li>Purchases</li>
                    <li>Reports</li>
                </ul>
            </div>
            <div></div>
        </nav>
    )
}

export default Sidenav;