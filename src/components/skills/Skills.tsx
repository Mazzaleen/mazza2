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
  url: string;
}

const techStack: TechIcon[] = [
  // Back-end
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", url: "https://www.python.org/" },
  { name: "Ruby", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg", url: "https://www.ruby-lang.org/" },
  { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", url: "https://www.java.com/" },
  { name: "GraphQL", icon: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg", url: "https://graphql.org/" },
  
  // Databases
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg", url: "https://www.postgresql.org/" },
  { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", url: "https://www.mysql.com/" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", url: "https://www.mongodb.com/" },
  { name: "Redis", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg", url: "https://redis.io/" },
  { name: "Cassandra", icon: "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg", url: "https://cassandra.apache.org/" },
  { name: "DynamoDB", icon: "https://upload.wikimedia.org/wikipedia/commons/f/fd/DynamoDB.png", url: "https://aws.amazon.com/dynamodb/" },
  
  // Analytics & Observability
  { name: "Tableau", icon: "https://www.svgrepo.com/show/354428/tableau-icon.svg", url: "https://www.tableau.com/" },
  { name: "Splunk", icon: "https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg", url: "https://www.splunk.com/" },
  { name: "Grafana", icon: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg", url: "https://grafana.com/" },
  
  // Front-end
  { name: "Rails", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg", url: "https://rubyonrails.org/" },
  { name: "Angular", icon: "https://angular.io/assets/images/logos/angular/angular.svg", url: "https://angular.io/" },
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", url: "https://react.dev/" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "Bootstrap", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg", url: "https://getbootstrap.com/" },
  { name: "Sass", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg", url: "https://sass-lang.com/" },
  
  // DevOps
  { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", url: "https://aws.amazon.com/" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg", url: "https://www.docker.com/" },
  { name: "Kubernetes", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg", url: "https://kubernetes.io/" },
  { name: "Jenkins", icon: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg", url: "https://www.jenkins.io/" },
  { name: "Heroku", icon: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg", url: "https://www.heroku.com/" },
  { name: "Kafka", icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg", url: "https://kafka.apache.org/" },
  
  // Data Science & ML
  { name: "TensorFlow", icon: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg", url: "https://www.tensorflow.org/" },
  { name: "PyTorch", icon: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg", url: "https://pytorch.org/" },
  { name: "MATLAB", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png", url: "https://www.mathworks.com/products/matlab.html" },
  { name: "Scikit-learn", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZJWDIJeEpYRO5v3nTiDd4h1VhHsyCtDcnjw&s", url: "https://scikit-learn.org/" },
  
  // Mobile
  { name: "Swift", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg", url: "https://www.swift.org/" },
  
  // Product Management
  { name: "Balsamiq", icon: "https://cdn.worldvectorlogo.com/logos/balsamiq-1.svg", url: "https://balsamiq.com/" },
  { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", url: "https://www.figma.com/" },
  { name: "Jira", icon: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg", url: "https://www.atlassian.com/software/jira" },
  { name: "Trello", icon: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg", url: "https://trello.com/" },
  { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", url: "https://firebase.google.com/" },
  { name: "Google Analytics", icon: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg", url: "https://analytics.google.com/" },
  { name: "Notion", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968793.png", url: "https://www.notion.so/" },
  
  // Version Control
  { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", url: "https://git-scm.com/" },
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
                <a
                  href={tech.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skills__icon-wrapper"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img src={tech.icon} alt={tech.name} className="skills__icon" />
                  <span className="skills__icon-name">{tech.name}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </section>
  );
};

export default Skills;