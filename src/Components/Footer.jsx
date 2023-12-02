import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      
      <img src="/src/assets/DH.png" alt="" />
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
};

const digitalHouseStyle = {
  fontSize: '1.5rem',  
};

export default Footer;