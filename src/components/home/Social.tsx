import { FC } from "react";
import { Fade } from "react-awesome-reveal";

const Social: FC = () => {
  return (
    <div className="home__social">
      <Fade direction="up" triggerOnce>
        <a
          href="https://www.linkedin.com/in/mazine-s-suliman"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-linkedin-alt"></i>
        </a>
      </Fade>
      <Fade direction="up" delay={100} triggerOnce>
        <a
          href="https://github.com/Mazzaleen"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-github-alt"></i>
        </a>
      </Fade>

      <Fade direction="up" delay={200} triggerOnce>
        <a
          href="https://medium.com/@mazine_suliman"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="bx bxl-medium"></i>
        </a>
      </Fade>
      {/* <Fade direction="up" delay={300} triggerOnce>
        <a
          href="https://twitter.com/amazzaleen"
          className="home_social-icon"
          target="_blank"
          rel="noreferrer"
        >
          <i className="uil uil-twitter-alt"></i>
        </a>
      </Fade> */}
    </div>
  );
};

export default Social;
