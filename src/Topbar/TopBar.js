import React from 'react'
import classes from './TopBar.module.css'
import {Link , useLocation } from 'react-router-dom';

const TopBar = () => {

  const location = useLocation();    
  const path = location.pathname;
  
  return (
    
      <header>
        <nav className={classes.TopBar}>
          <div className={classes.logo}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="logo" />
            </div>
            <div>
              <ul className={classes.horizontal}>
                <li className={path === '/demo1' ? classes.active : ''}><Link to="/demo1">Demo 1</Link></li>
                <li className={path === '/demo2' ? classes.active : ''}><Link to="/demo2">Demo 2</Link></li>
              </ul>
            </div>
        </nav>
      </header>
  
  )
}

export default TopBar
