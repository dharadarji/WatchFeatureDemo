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
              <ul class={classes.horizontal}>
                <li><Link to="/demo1"><a className={path == '/demo1' ? classes.active : ''}>Demo 1</a></Link></li>
                <li><Link to="/demo2"><a className={path == '/demo2' ? classes.active : ''}>Demo 2</a></Link></li>
              </ul>
            </div>
        </nav>
      </header>
  
  )
}

export default TopBar
