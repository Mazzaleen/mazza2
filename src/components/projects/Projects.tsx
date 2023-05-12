import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Slide } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/pagination";

import "./Projects.css";
import { projectsData } from "../data/projectsData";

SwiperCore.use([Pagination, Autoplay]);

const Projects: React.FC = () => {
  const swiperRef = React.useRef<SwiperCore>(null);


  const handleSlideChange = () => {
    if (swiperRef.current?.isEnd) {
      swiperRef.current?.slideTo(0, 0, false);
    }
  }
  
  return (
    <section className="projects container section" id="projects">
      <Slide direction="left" triggerOnce>
        <h2 className="section__title">Projects</h2>
      </Slide>
      <Slide direction="right" triggerOnce>
        <span className="section__subtitle">
          A curated collection of my Academic and Personal Projects
        </span>
      </Slide>
      <Slide direction="left" triggerOnce>
        <Swiper
          className="projects__container"
          loop={true}
          grabCursor={true}
          autoplay={{ delay:2750,  disableOnInteraction: false}}
          onSlideChange={handleSlideChange}
          slidesPerView={3}
          spaceBetween={24}
          pagination={{ clickable: true }}
          grid={{ rows: 2, fill: 'row' }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              grid: { rows: 2, fill: 'row' }
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
              grid: { rows: 2, fill: 'column' }
            },
          }}
          modules={[Pagination, Autoplay]}
          // onInit={(swiper: any) => {
          //   swiper.autoplay.stop();
          //   swiper.autoplay.start();
          // }}
        >
          {projectsData.map(({ id, title, description, image, GitHub, hosted }) => {
            return (
              <SwiperSlide className="projects__card" key={id}>
                <h3 className="projects__name">{title}</h3>
                <img src={image} alt="img" className="projects__img" />
                <div className="projects__description">{description}</div>
                <div>
                  <a href={`${hosted}`} className="projects_social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-globe"></i>
                  </a>
                  <a href={`${GitHub}`} className="projects_social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-github-alt"></i>
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Slide>
    </section>
  );
};

export default Projects;
