import React, { useState, useEffect } from 'react';
import './Header.css'; // We'll create this for specific header styles if needed

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initialize dark mode from localStorage or default to false
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode === 'true';
  });

  useEffect(() => {
    // Apply dark mode class to body and save preference to localStorage
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Close menu when a nav link is clicked
  const handleNavLinkClick = (e) => {
    setIsMenuOpen(false);
    // Basic active link handling (can be improved with scrollspy)
    document.querySelectorAll('.nav_link').forEach(n => n.classList.remove('active'));
    e.currentTarget.classList.add('active'); // Use e.currentTarget
  };

  // Effect for initially setting active link based on hash or default to home
  useEffect(() => {
    const setActiveLink = () => {
      const currentHash = window.location.hash || '#home';
      document.querySelectorAll('.nav_link').forEach(n => n.classList.remove('active'));
      const activeLink = document.querySelector(`.nav_link[href='${currentHash}']`);
      if (activeLink) {
          activeLink.classList.add('active');
      } else {
          const homeLink = document.querySelector(".nav_link[href='#home']");
          if (homeLink) {
              homeLink.classList.add('active');
          }
      }
    };

    setActiveLink(); // Set on initial load
    window.addEventListener('hashchange', setActiveLink); // Set on hash change

    return () => {
      window.removeEventListener('hashchange', setActiveLink);
    };
  }, []);


  return (
    <header className={`l-header ${isDarkMode ? 'dark' : ''}`} id='head'>
      <nav className='nav bd-grid'>
        <div>
          {/* Ensure clicking logo also updates active link to home */}
          <a href='#home' className='nav_logo' onClick={handleNavLinkClick}>
            <img src='/img/logo.png' alt='Logo' />
          </a>
        </div>

        <div className={`nav_menu ${isMenuOpen ? 'show_menu' : ''}`} id='nav-menu'>
          <ul className='nav_list' id='navlist'>
            <li className='nav_item'>
              <a href='#home' className='nav_link' onClick={handleNavLinkClick}>Home</a>
            </li>
            <li className='nav_item'>
              <a href='#about' className='nav_link' onClick={handleNavLinkClick}>About</a>
            </li>
            <li className='nav_item'>
              <a href='#skills' className='nav_link' onClick={handleNavLinkClick}>Skills</a>
            </li>
            <li className='nav_item'>
              <a href='#work' className='nav_link' onClick={handleNavLinkClick}>Projects</a>
            </li>
            <li className='nav_item'>
              <a href='#contact' className='nav_link' onClick={handleNavLinkClick}>Contact</a>
            </li>

            {/* Dark mode toggle */}
            <li className='nav_item'>
              <div className='toggle-container'>
                <input
                  type='checkbox'
                  id='toggle'
                  name='toggle'
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <label className='lab' htmlFor='toggle'>
                  <i className={`bx ${isDarkMode ? 'bxs-sun' : 'bxs-moon'}`}></i>
                </label>
              </div>
            </li>
          </ul>
        </div>

        <div className='nav_toggle' id='nav-toggle' onClick={toggleMenu}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>
    </header>
  );
}
