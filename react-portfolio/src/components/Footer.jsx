import React from 'react';
import './Footer.css'; // For specific Footer section styles

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer section'> {/* Added 'section' class for consistent padding if needed */}
      <p className='footer_title'>Made with ❤️ by Ali Astanboos</p>
      <div className='footer_social'>
        <a
          href='https://www.linkedin.com/in/siralias'
          target='_blank'
          rel='noopener noreferrer'
          className='footer_icon'
        >
          <i className='bx bxl-linkedin'></i>
        </a>
        <a
          href='mailto:Ali.astanboos@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='footer_icon'
        >
          <i className='bx bxl-gmail'></i>
        </a>
        <a
          href='https://www.instagram.com/alii_as'
          target='_blank'
          rel='noopener noreferrer'
          className='footer_icon'
        >
          <i className='bx bxl-instagram'></i>
        </a>
      </div>
      <p className='footer_copy'>&#169; {currentYear} copyright all right reserved</p>
    </footer>
  );
}
