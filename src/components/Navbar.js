import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
          <Link to='/book-list'>
          <h1>Book App</h1>
          </Link>
        </div>
        <div> 
          <Link to='/favorites'>
          <h3>Your Favories</h3>
          </Link>
        </div>
        <div>
          <Link to='/login'>
            <h3>Login Page</h3>
          </Link>
        </div>
    </div>
  )
}

export default Navbar; 
