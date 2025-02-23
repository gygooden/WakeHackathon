import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc0bSlBx8iksQYxNLSAPjVf4u49mTyFLEi9EIqzfMpGXDamkA/viewform?usp=sf_link'; /*Interchangeable google form/external link for visitor information*/

  const openGoogleForm = () => {
    window.open(googleFormUrl, '_blank');
    closeMobileMenu(); // Close the mobile menu after clicking the link
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className="navbar-placeholder"></div>
          {/* 
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logoImage} alt="Bullseye Bio Logo" className="logo-image" />
  </Link> */}

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' 
                className='nav-links' 
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/mission'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Mission
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/diagnose'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Diagnose
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/team'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Team
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/relevantwork'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Similar Projects
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          {/*
          {button && (
            <Button buttonStyle='btn--outline' onClick={openGoogleForm}>
              Subscribe
            </Button>
          )}
          */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;