import React from 'react';
import './About.css'; // For any specific About section styles

export default function About() {
  return (
    <section className='about section' id='about'>
      <h2 className='section-title'>About</h2>

      <div className='about_container bd-grid'>
        <div className='about_img'>
          {/* Assuming me.jpg will be in public/img/ */}
          <img src='/img/me.jpg' alt='About me' />
        </div>

        <div>
          {/* <h2 className='about_subtitle'>I'm Ali Astanboos</h2> */}
          {/* The original subtitle was commented out, keeping it that way unless specified */}
          <p className='about_text'>
            Hard working telecommunications engineer from Iran (Mashhad). I'm
            also a former English teacher and a future full stack developer.
            I’ve found my passion in web development. I love spending time
            coding and encountering new challenges. I’m highly adaptable to
            new challenges and projects and with hasty hands of mine, I can
            assure that all the things you require will be done in no time.
          </p>
        </div>
      </div>
    </section>
  );
}
