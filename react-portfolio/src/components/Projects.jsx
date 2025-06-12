import React from 'react';
import './Projects.css'; // For specific Projects section styles

export default function Projects() {
  const projectData = [
    { name: 'inClinic', imgSrc: '/img/inClinic.png', link: 'https://in-clinic.ir/fa' },
    { name: 'GrufMag', imgSrc: '/img/grufMag.png', link: 'https://grufmag.ir/' },
    { name: 'Barsava Green Home', imgSrc: '/img/barsava.png', link: 'https://barsavagreenhome.com/' },
    { name: 'Salari', imgSrc: '/img/salari.png', link: 'https://salari.diduweb.ir' },
    { name: 'Panah Buildings', imgSrc: '/img/panah.png', link: 'https://panahbuildings.ir/fa' },
    { name: 'Xitonix', imgSrc: '/img/xitonix.png', link: 'https://www.xitonix.com/' },
  ];

  return (
    <section className='work section' id='work'> {/* Using 'work' class and id from original */}
      <h2 className='section-title'>Projects</h2>
      <div className='work_container bd-grid'>
        {projectData.map((project, index) => (
          <a
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='work_img_link' // Changed from work_img to avoid confusion if we style the link itself
            key={index}
          >
            <img src={project.imgSrc} alt={project.name} className='work_img_content' />
          </a>
        ))}
      </div>

      <div className='cv_button_container'>
        <a
          href='https://drive.google.com/file/d/1nFUabAksTf3X4aWv7UdUBHtV38KwrUcZ/view?usp=sharing'
          target='_blank'
          rel='noopener noreferrer'
          className='button cv_button' // Using the global .button style and adding .cv_button for specifics
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
