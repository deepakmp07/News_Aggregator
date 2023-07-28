import React from 'react';
import './navside.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const user=useSelector((state)=>state.username);
  return (
    <div className="navbar">
      <div className="logo">
      </div>
      <ul className="nav-links">
        {user?(<h2>{user}</h2>):
      <li><NavLink to="/" activeClassName="active-link">Login</NavLink></li>
        }
        <li><NavLink exact to="/home" activeClassName="active-link">Home</NavLink></li>
        <li><NavLink to="/categories" activeClassName="active-link">For you</NavLink></li>
        <li><NavLink to="/savedarticles" activeClassName="active-link">Saved</NavLink></li>
        <li><NavLink to="/savedarticles" activeClassName="active-link">Following</NavLink></li>
        <li><NavLink to="/savedarticles" activeClassName="active-link">|</NavLink></li>
        <li><NavLink to="/india" activeClassName="active-link">India</NavLink></li>
        <li><NavLink to="/world" activeClassName="active-link">World</NavLink></li>
        <li><NavLink to="/local" activeClassName="active-link">Local</NavLink></li>
        <li><NavLink to="/business" activeClassName="active-link">Business</NavLink></li>
        <li><NavLink to="/sports" activeClassName="active-link">Sports</NavLink></li>
        <li><NavLink to="/politics" activeClassName="active-link">Politics</NavLink></li>
        <li><NavLink to="/entertainment" activeClassName="active-link">Entertainment</NavLink></li>
        <li><NavLink to="/about" activeClassName="active-link">About us</NavLink></li>
        <li><NavLink to="/feedback" activeClassName="active-link">Feedback</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;
