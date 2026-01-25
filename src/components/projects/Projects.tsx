import React from "react";
import { Slide } from "react-awesome-reveal";
import "./Projects.css";
import { projectsData } from "../data/projectsData";

interface ProjectIcon {
  name: string;
  icon: string;
}

const projectIcons: ProjectIcon[] = [
  { name: "Code", icon: "</>" },
  { name: "Function", icon: "{ }" },
  { name: "Array", icon: "[ ]" },
  { name: "Parentheses", icon: "( )" },
  { name: "Arrow", icon: "=>" },
  { name: "Semicolon", icon: ";" },
  { name: "Hash", icon: "#" },
  { name: "Dollar", icon: "$" },
  { name: "At", icon: "@" },
  { name: "Asterisk", icon: "*" },
  { name: "Slash", icon: "//" },
  { name: "Dot", icon: "..." },
  { name: "Pipe", icon: "|" },
  { name: "Ampersand", icon: "&&" },
  { name: "Equals", icon: "===" },
  { name: "Not", icon: "!" },
  { name: "Question", icon: "?" },
  { name: "Colon", icon: ":" },
];

const Projects: React.FC = () => {
  // Split the projectsData into two arrays for two rows
  const halfwayIndex = Math.ceil(projectsData.length / 2);
  const firstRowProjects = projectsData.slice(0, halfwayIndex);
  const secondRowProjects = projectsData.slice(halfwayIndex);

  const renderProjectCard = (project: typeof projectsData[0]) => {
    const { id, title, description, image } = project;
    return (
      <div className='projects__card' key={id}>
        <h3 className='projects__name'>{title}</h3>
        <a
          href={`mailto:mazine+alumni.brown.edu?subject=request to schedule demo- ${title}`}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `mailto:mazine+alumni.brown.edu?subject=request to schedule demo- ${title}`;
          }}
          className='projects__img-link'
        >
          <img src={image} alt='img' className='projects__img' />
        </a>
        <div className='projects__description'>{description}</div>
        <div>
          <a
            href={`mailto:mazine+alumni.brown.edu?subject=request to schedule demo- ${title}`}
            className='projects_social-icon'
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `mailto:mazine+alumni.brown.edu?subject=request to schedule demo- ${title}`;
            }}
          >
            <i className='uil uil-globe'></i>
          </a>
          <a
            href={`mailto:mazine+alumni.brown.edu?subject=request to view project- ${title}`}
            className='projects_social-icon'
            onClick={(e) => {
              e.preventDefault();
              window.location.href = `mailto:mazine+alumni.brown.edu?subject=request to view project- ${title}`;
            }}
          >
            <i className='uil uil-github-alt'></i>
          </a>
        </div>
      </div>
    );
  };

  // Create columns for project icons background
  const columns = 6;
  const iconsPerColumn = Math.ceil(projectIcons.length / columns);
  
  const columnArrays = Array.from({ length: columns }, (_, colIndex) => {
    const start = colIndex * iconsPerColumn;
    const end = start + iconsPerColumn;
    return projectIcons.slice(start, end);
  });

  return (
    <section className='projects section' id='projects'>
      {/* Project icons background behind title */}
      <div className="projects__background-container">
        {columnArrays.map((columnIcons, colIndex) => {
          const isReverse = colIndex % 2 === 1;
          const animationDuration = 15 - (colIndex * 0.5);
          
          return (
            <div
              key={`bg-${colIndex}`}
              className={`projects__column ${isReverse ? 'projects__column--reverse' : ''}`}
              style={{
                '--animation-duration': `${animationDuration}s`
              } as React.CSSProperties}
            >
              <div className="projects__column-track">
                {[...columnIcons, ...columnIcons].map((icon, index) => (
                  <div key={`bg-${icon.name}-${index}`} className="projects__icon-slide">
                    <div className="projects__icon-wrapper">
                      <span className="projects__icon-emoji">{icon.icon}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className='container' style={{ position: 'relative', zIndex: 1 }}>
        <Slide direction='left' triggerOnce>
          <h2 className='section__title'>Projects</h2>
        </Slide>
        <Slide direction='right' triggerOnce>
          <span className='section__subtitle'></span>
        </Slide>
      </div>

      {/* First row - scrolling left */}
      <div className='projects__scroll-container'>
        <div className='projects__scroll-track projects__scroll-track--left'>
          {[...firstRowProjects, ...firstRowProjects].map((project, index) => (
            <React.Fragment key={`${project.id}-${index}`}>
              {renderProjectCard(project)}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Second row - scrolling right */}
      <div className='projects__scroll-container'>
        <div className='projects__scroll-track projects__scroll-track--right'>
          {[...secondRowProjects, ...secondRowProjects].map((project, index) => (
            <React.Fragment key={`${project.id}-${index}`}>
              {renderProjectCard(project)}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
