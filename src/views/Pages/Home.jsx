import NavBar from '@/components/NavBar/NavBar';
import Banner from '@/components/Banner/Banner';
import Skills from '@/components/Skills/Skills';
import ProjectsSection from '@/components/Projects/ProjectsSection';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import AboutMe from '@/views/AboutMe/AboutMe';

function Home() {
  
  return (
    <>
      <NavBar />
      <div className="app-container">
        <div className='bgBanner1'>
          <Banner />
          <Skills />
          <ProjectsSection />
          <AboutMe />
        </div>
        <Contact />
      </div>
      <Footer />
      
    </>
  );
}

export default Home
