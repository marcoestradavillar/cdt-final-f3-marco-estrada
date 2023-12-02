import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '60px',
    backgroundColor: '#333',
    color: 'white',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
  };

  return (
    <div style={navStyle}>
      <Link to='/' style={linkStyle}><h4>Home</h4></Link>
      <Link to='/contact' style={linkStyle}><h4>Contact</h4></Link>
      <Link to='/favs' style={linkStyle}><h4>Favs</h4></Link>
    </div>
  );
}

export default Navbar;