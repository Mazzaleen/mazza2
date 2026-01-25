import { FC, useContext, useEffect } from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import contextDarkMod from "../context/contextDarkMod";
const Home: FC = () => {
  const { IsdarkMode } = useContext(contextDarkMod);
  // Dark mode for the body
  useEffect(() => {
    if (IsdarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [IsdarkMode]);

  return (
    <section className="home section" id="home">
      <div className="home__animated-blobs">
        <div className="home__blob home__blob--1"></div>
        <div className="home__blob home__blob--2"></div>
        <div className="home__blob home__blob--3"></div>
        <div className="home__blob home__blob--4"></div>
        <div className="home__blob home__blob--5"></div>
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
