import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect/dist/core'; // Correct import path
import './Home.css'; // For any specific Home section styles

export default function Home() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const typewriter = new Typewriter(typewriterRef.current, {
        strings: [
          'React.js Developer',
          'Former English Teacher',
          'Full-Stack To Be',
          'Telecom Engineer',
          'Nature Lover',
          'HandPan Player',
        ],
        loop: true,
        autoStart: true,
      });
      // No need to explicitly call typewriter.start() as autoStart is true
    }
  }, []);

  return (
    <section className='home bd-grid section' id='home'>
      <div className='home_data'>
        <h1 className='home_title'>
          Hi, <br />
          I'm <span className='home_title-color'>Ali</span><br />
          <span ref={typewriterRef} id='autoWrite'></span>
        </h1>
        <a href='#contact' className='button'>
          Contact
        </a>
      </div>

      <div className='home_social'>
        <a
          href='https://www.linkedin.com/in/siralias'
          target='_blank'
          rel='noopener noreferrer'
          className='home_social-icon'
        >
          <i className='bx bxl-linkedin'></i>
        </a>
        <a
          href='https://github.com/SirAliAs'
          target='_blank'
          rel='noopener noreferrer'
          className='home_social-icon'
        >
          <i className='bx bxl-github'></i>
        </a>
        <a
          href='https://www.instagram.com/alii_as'
          target='_blank'
          rel='noopener noreferrer'
          className='home_social-icon'
        >
          <i className='bx bxl-instagram'></i>
        </a>
        <a
          href='https://www.t.me/SirAliAs'
          target='_blank'
          rel='noopener noreferrer'
          className='home_social-icon'
        >
          <i className='bx bxl-telegram'></i>
        </a>
        <a
          href='https://wa.me/+989150585886'
          target='_blank'
          rel='noopener noreferrer'
          className='home_social-icon'
        >
          <i className='bx bxl-whatsapp'></i>
        </a>
        <a
          href='mailto:Ali.astanboos@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
          className='home_social-icon'
        >
          <i className='bx bxl-gmail'></i>
        </a>
      </div>

      <div className='home_img'>
        {/* Assuming ProfileImg.jpg will be in public/img/ */}
        <img src='/img/ProfileImg.jpg' alt='Profile' />
      </div>
    </section>
  );
}
