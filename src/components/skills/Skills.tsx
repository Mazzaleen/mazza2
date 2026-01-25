import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, FreeMode } from "swiper";
import { Slide } from "react-awesome-reveal";
import "swiper/css";
import "swiper/css/free-mode";
import "./Skills.css";

SwiperCore.use([Autoplay, FreeMode]);

interface TechIcon {
  name: string;
  icon: string;
}

const techStack: TechIcon[] = [
  // Back-end
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "Ruby", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" },
  { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" },
  
  // Databases
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" },
  { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" },
  { name: "Redis", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg" },
  { name: "Cassandra", icon: "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg" },
  { name: "DynamoDB", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png" },
  
  // Analytics & Observability
  { name: "Tableau", icon: "https://www.svgrepo.com/show/354428/tableau-icon.svg" },
  { name: "Splunk", icon: "https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg" },
  { name: "Grafana", icon: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg" },
  
  // Front-end
  { name: "Rails", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg" },
  { name: "Angular", icon: "https://angular.io/assets/images/logos/angular/angular.svg" },
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
  { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
  { name: "Bootstrap", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" },
  { name: "Sass", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" },
  
  // DevOps
  { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" },
  { name: "Kubernetes", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
  { name: "Jenkins", icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg" },
  { name: "Heroku", icon: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" },
  { name: "Kafka", icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" },
  
  // Data Science & ML
  { name: "TensorFlow", icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" },
  { name: "PyTorch", icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg" },
  { name: "MATLAB", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" },
  { name: "Scikit-learn", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJWDIJeEpYRO5v3nTiDd4h1VhHsyCtDcnjw&s" },
  
  // Mobile
  { name: "Swift", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg" },
  
  // Product Management
  { name: "Balsamiq", icon: "https://balsamiq.com/assets/company/brandassets/smileyface-transparent-1080x1080.png" },
  { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
  { name: "Jira", icon: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg" },
  { name: "Trello", icon: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg" },
  { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  { name: "Google Analytics", icon: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg" },
  { name: "Jira", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968793.png" },
  
  // Version Control
  { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
];

const Skills: React.FC = () => {
  // Create multiple columns for the rain effect
  const columns = 6;
  const iconsPerColumn = Math.ceil(techStack.length / columns);
  
  const columnArrays = Array.from({ length: columns }, (_, colIndex) => {
    const start = colIndex * iconsPerColumn;
    const end = start + iconsPerColumn;
    return techStack.slice(start, end);
  });

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <Slide direction="left" triggerOnce>
          <h2 className="section__title">Skills</h2>
        </Slide>
        <Slide direction="right" triggerOnce>
          <span className="section__subtitle"></span>
        </Slide>
      </div>

      <div className="skills__rain-container">
        {columnArrays.map((columnIcons, colIndex) => (
          <Swiper
            key={colIndex}
            className="skills__column"
            direction="vertical"
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
              reverseDirection: colIndex % 2 === 1, // Alternate direction for variety
            }}
            speed={8000 + (colIndex * 1000)} // Vary speed slightly per column
            slidesPerView="auto"
            spaceBetween={30}
            modules={[Autoplay, FreeMode]}
          >
            {columnIcons.map((tech, index) => (
              <SwiperSlide key={`${tech.name}-${index}`} className="skills__icon-slide">
                <div className="skills__icon-wrapper">
                  <img src={tech.icon} alt={tech.name} className="skills__icon" />
                  <span className="skills__icon-name">{tech.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </section>
  );
};

export default Skills;