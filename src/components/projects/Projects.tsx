import React from "react";
import { Slide } from "react-awesome-reveal";
import "./Projects.css";
import { projectsData } from "../data/projectsData";

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

  return (
    <section className='projects section' id='projects'>
      <div className='container'>
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
