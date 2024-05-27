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

function App() {
  return (
    <div className="page">
      <Header>
        <Navigation />
      </Header>
      <Main>
        <About />
        <Skillset />
        <Portfolio />
        <Experience />
        <Education />
        <HireMe />
      </Main>
      <Footer>
        <Links />
      </Footer>
    </div>
  );
}

export default App;
