import React from 'react';
import './Skills.css'; // For any specific Skills section styles

export default function Skills() {
  // Skill data could be an array of objects for easier management
  const skillsList1 = [
    { name: 'REACT', icon: 'bxl-react' },
    { name: 'JAVASCRIPT', icon: 'bxl-javascript' },
    { name: 'TAILWIND', icon: 'bxl-tailwind-css' }, // Assuming bxl-tailwind-css is a valid Boxicon
  ];

  const skillsList2 = [
    { name: 'NEXT JS', icon: 'bxl-nodejs' }, // Or a more specific Next.js icon if available
    { name: 'REDUX', icon: 'bxl-redux' },
    { name: 'TYPESCRIPT', icon: 'bxl-typescript' },
  ];

  return (
    <section className='skills section' id='skills'>
      <h2 className='section-title'>Skills</h2>
      <div className='skills_container bd-grid'>
        <div>
          {skillsList1.map((skill, index) => (
            <div className='skills_data' key={index}>
              <div className='skills_names'>
                <i className={`bx ${skill.icon} skills_icon`}></i>
                <span className='skills_name'>{skill.name}</span>
              </div>
              {/* The original HTML had a div for a skills bar, e.g., <div class='skills_bar skills_'></div> */}
              {/* This bar was not styled to show percentage in the original CSS snippet. */}
              {/* If a visual bar is needed, it requires more complex styling or a different approach. */}
              {/* For now, replicating the structure without a visible dynamic bar. */}
              <div className='skills_bar_placeholder'></div> {/* Placeholder for where bar was */}
            </div>
          ))}
        </div>

        <div>
          {skillsList2.map((skill, index) => (
            <div className='skills_data' key={index}>
              <div className='skills_names'>
                <i className={`bx ${skill.icon} skills_icon`}></i>
                <span className='skills_name'>{skill.name}</span>
              </div>
              <div className='skills_bar_placeholder'></div> {/* Placeholder */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
