import { useLayoutEffect, useState, useRef, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import About from "../About/About";
import Skillset from "../Skillset/Skillset";
import Portfolio from "../Portfolio/Portfolio";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import HireMe from "../HireMe/HireMe";
import Links from "../Links/Links";

// css
import "./App.css";
import "../../styles/animations.css";

function App() {
  const navigationRef = useRef();
  const aboutRef = useRef(null);
  const skillsetRef = useRef(null);
  const portfolioRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const hireMeRef = useRef(null);
  const footerRef = useRef(null);

  const [refs, setRefs] = useState([
    aboutRef,
    portfolioRef,
    experienceRef,
    educationRef,
    hireMeRef,
    footerRef,
    skillsetRef,
  ]);

  function onScroll(currentRef) {
    refs.map((ref) => {
      const topPosition = ref.current.getBoundingClientRect().top;
      const halfHeight = ref.current.getBoundingClientRect().height / 3;
      const scrollPosition = window.scrollY + window.innerHeight;
      const yOffset = window.pageYOffset;

      if (window.pageYOffset + topPosition + halfHeight < scrollPosition) {
        if (!ref.current.classList.contains("animateIn")) {
          ref.current.classList.add("animateIn");
        }
      }
    });
  }

  useLayoutEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header>
                <Navigation reference={navigationRef} />
              </Header>
              <Main>
                <About reference={aboutRef} />
                <Skillset reference={skillsetRef} />
                <Portfolio reference={portfolioRef} />
                <Experience reference={experienceRef} />
                <Education reference={educationRef} />
                <HireMe reference={hireMeRef} />
              </Main>
              <Footer reference={footerRef}>
                <Links />
              </Footer>
            </>
          }
        />
        <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
      </Routes>
    </div>
  );
}

export default App;
