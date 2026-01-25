import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, FreeMode } from "swiper";
import { Slide } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import "./Projects.css";
import { projectsData } from "../data/projectsData";

SwiperCore.use([Pagination, Autoplay, FreeMode]);

const Projects: React.FC = () => {
  // Split the projectsData into two arrays for two rows
  const halfwayIndex = Math.ceil(projectsData.length / 2);
  const firstRowProjects = projectsData.slice(0, halfwayIndex);
  const secondRowProjects = projectsData.slice(halfwayIndex);

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

      {/* First Swiper instance for the first row */}
      <Swiper
        className='projects__container projects__container--fullwidth'
        loop={true}
        allowTouchMove={false}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={8000}
        slidesPerView={3}
        spaceBetween={24}
        modules={[Pagination, Autoplay, FreeMode]}
      >
        {firstRowProjects.map(
          ({ id, title, description, image, GitHub, hosted }) => (
            <SwiperSlide className='projects__card' key={id}>
              <h3 className='projects__name'>{title}</h3>
              <img src={image} alt='img' className='projects__img' />
              <div className='projects__description'>{description}</div>
              <div>
                <a
                  href={`mailto:mazine+alumni.brown.edu?subject=request to schedule demo- ${title}`}
                  className='projects_social-icon'
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className='uil uil-globe'></i>
                </a>
                <a
                  href={`mailto:mazine+alumni.brown.edu?subject=request to view project- ${title}`}
                  className='projects_social-icon'
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className='uil uil-github-alt'></i>
                </a>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>

      {/* Second Swiper instance for the second row */}
      <Swiper
        className='projects__container projects__container--fullwidth'
        loop={true}
        allowTouchMove={false}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={8000}
        slidesPerView={3}
        spaceBetween={24}
        modules={[Pagination, Autoplay, FreeMode]}
      >
        {secondRowProjects.map(
          ({ id, title, description, image, GitHub, hosted }) => (
            <SwiperSlide className='projects__card' key={id}>
              <h3 className='projects__name'>{title}</h3>
              <img src={image} alt='img' className='projects__img' />
              <div className='projects__description'>{description}</div>
              <div>
                <a
                  href={`mailto:mazine+alumni.brown.edu?subject=request to schedule demo- ${title}`}
                  className='projects_social-icon'
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className='uil uil-globe'></i>
                </a>
                <a
                  href={`mailto:mazine+alumni.brown.edu?subject=request to view project- ${title}`}
                  className='projects_social-icon'
                  onClick={(e) => e.stopPropagation()}
                >
                  <i className='uil uil-github-alt'></i>
                </a>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};

export default Projects;
