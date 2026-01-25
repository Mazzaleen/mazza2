import { FC, useContext, useEffect, useState } from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import contextDarkMod from "../context/contextDarkMod";

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
  
  // AI & LLMs
  { name: "Claude", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/1280px-Claude_AI_symbol.svg.png", url: "https://www.anthropic.com/claude" },
  { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", url: "https://openai.com/chatgpt" },
  { name: "OpenAI", icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg", url: "https://openai.com/" },
  { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", url: "https://huggingface.co/" },
  
  // Product Management
  { name: "Balsamiq", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1mMGLpZ6G7qOmlYTaVWw-qBAMAJkwmHMhwg&s", url: "https://balsamiq.com/" },
  { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg", url: "https://www.figma.com/" },
  { name: "Jira", icon: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg", url: "https://www.atlassian.com/software/jira" },
  { name: "Trello", icon: "https://www.vectorlogo.zone/logos/trello/trello-icon.svg", url: "https://trello.com/" },
  { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg", url: "https://firebase.google.com/" },
  { name: "Google Analytics", icon: "https://www.vectorlogo.zone/logos/google_analytics/google_analytics-icon.svg", url: "https://analytics.google.com/" },
  { name: "Notion", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968793.png", url: "https://www.notion.so/" },
  
  // Version Control
  { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", url: "https://git-scm.com/" },
];

const Home: FC = () => {
  const { IsdarkMode } = useContext(contextDarkMod);
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Dark mode for the body
  useEffect(() => {
    if (IsdarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [IsdarkMode]);

  // Handle scroll fade effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const homeSection = document.getElementById("home");
      
      if (homeSection) {
        const homeSectionHeight = homeSection.offsetHeight;
        // Calculate opacity: fade out as we scroll up from home section
        // Opacity goes from 1 to 0 as we scroll through the home section
        const opacity = Math.max(0, 1 - (scrollPosition / homeSectionHeight));
        setScrollOpacity(opacity);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Create multiple columns for the rain effect
  const columns = 6;
  const iconsPerColumn = Math.ceil(techStack.length / columns);
  
  const columnArrays = Array.from({ length: columns }, (_, colIndex) => {
    const start = colIndex * iconsPerColumn;
    const end = start + iconsPerColumn;
    return techStack.slice(start, end);
  });

  return (
    <section className="home section" id="home">
      <div className="home__animated-blobs">
        <div className="home__blob home__blob--1"></div>
        <div className="home__blob home__blob--2"></div>
        <div className="home__blob home__blob--3"></div>
        <div className="home__blob home__blob--4"></div>
        <div className="home__blob home__blob--5"></div>
      </div>
      
      {/* Skills rain background */}
      <div
        className="home__skills-background"
        style={{ opacity: scrollOpacity }}
      >
        {columnArrays.map((columnIcons, colIndex) => {
          const isReverse = colIndex % 2 === 1;
          const animationDuration = 20 - (colIndex * 0.5);
          
          return (
            <div
              key={colIndex}
              className={`home__skills-column ${isReverse ? 'home__skills-column--reverse' : ''}`}
              style={{
                '--animation-duration': `${animationDuration}s`
              } as React.CSSProperties}
            >
              <div className="home__skills-track">
                {[...columnIcons, ...columnIcons].map((tech, index) => (
                  <div key={`${tech.name}-${index}`} className="home__skills-icon-slide">
                    <div className="home__skills-icon-wrapper">
                      <img src={tech.icon} alt={tech.name} className="home__skills-icon" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
      </div>
    </section>
  );
};

export default Home;
