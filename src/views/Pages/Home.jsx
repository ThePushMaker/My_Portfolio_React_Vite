import NavBar from '../../components/NavBar/NavBar';
import Banner from '../../components/Banner/Banner';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import AboutMe from '../AboutMe/AboutMe';

function Home() {
  
  return (
    <>
      <NavBar />      
      <div className="app-container">
        <div className='bgBanner1'>
          <Banner />
          <Skills />
          <Projects />
          <AboutMe />
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default Home
