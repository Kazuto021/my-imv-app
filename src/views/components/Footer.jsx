// src/components/Footer.js
import React from 'react';
import './styles/footer.scss'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer flex-column">
        <div className='co-info'>
            <img src="JainsonCorp.png" height="100px" width="150px" alt="" />
            <h5> 34/20, Tonk Rd, Sanganer, Sector 3, Pratap Nagar, Jaipur, Rajasthan 302033</h5>
        </div>
      <div className="container">
        <p>&copy; 2024 Inventory Management System. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
