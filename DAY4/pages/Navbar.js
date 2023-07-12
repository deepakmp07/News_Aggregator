import React from 'react';
import './navside.css';
import { NavLink } from 'react-router-dom';
import {Route, Routes } from "react-router-dom";
import categories from './categories';
import savedarticles  from './savedarticles';
import settings from './settings';
import Homepage from './Homepage';
const Navbar = () => {
  return (
    <div className='contain'>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/" activeClassName="active-link">News Aggregator</NavLink>
        </div>
        <ul className="nav-links">
          <li><NavLink exact to="/home" activeClassName="active-link">Home</NavLink></li>
          <li><NavLink to="/categories" activeClassName="active-link">Categories</NavLink></li>
          <li><NavLink to="/savedarticles" activeClassName="active-link">Saved Articles</NavLink></li>
          <li><NavLink to="/settings" activeClassName="active-link">Settings</NavLink></li>
        </ul>
      </nav>
      <div className="subject">

      <aside className="side-navbar">
        <ul className="side-nav-links">
          <li><a href="#">World</a></li>
          <li><a href="#">Business</a></li>
          <li><a href="#">Technology</a></li>
          <li><a href="#">Entertainment</a></li>
          <li><a href="#">Sports</a></li>
          <li><a href='#'>Sharemarket</a></li>
        </ul>
      </aside>
      <div className="content">
      <Routes>
        <Route path = '/home' Component = {Homepage}/>
        <Route path = '/categories' Component={categories}/>
        <Route path = '/settings' Component={settings}/>
        <Route path = '/savedarticles' Component={savedarticles}/>
      </Routes>
      </div>
    </div>
      </div>
  );
};

export default Navbar;
