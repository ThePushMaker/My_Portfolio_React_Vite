import NavBar from '../components/NavBar/NavBar';
import Banner from '../components/Banner/Banner';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { Tooltip } from 'react-tooltip';

function Home() {
  
  return (
    <>
      <NavBar />      
      <div className="app-container">
        <Banner />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
      <Tooltip id={"myTooltip"} place="top" type="dark" effect="solid" style={{fontSize:"17px"}}/>
    </>
  );
}

export default Home
