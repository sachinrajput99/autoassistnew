import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
// import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import Features from './sections/Features.jsx';
import Render from './sections/Render.jsx';

import Dashboard from './sections/Dashboard.jsx';
import DownloadSection from './sections/DownloadSection.jsx';
import { useLayoutEffect } from 'react';


const Home = () => {
 
  useLayoutEffect(() => {
    // Select the element using querySelector
    const element = document.querySelector('.css-18n5u3o');

    // If the element exists, remove it
    if (element) {
      element.style.display = 'none'; // Alternatively, use `element.remove()` to completely remove it
    }
  }, []); // Empty dependency array means this runs once after the initial render

  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Features />
      <Render />
      <Dashboard />
      <DownloadSection />

      {/* <Contact /> */}
 
      <Clients />
      {/*   <div className="absolute">
        <iframe
          loading="lazy"
          src="https://zcal.co/i/SAZueYJh?embed=1&embedType=iframe"
          style={{
            border: 'none',
            minWidth: '250px',
            minHeight: '300px',
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            width: '200px',
            height: '300px',
            zIndex: 1000,
          }}
          id="zcal-invite"></iframe>
      </div> */}
    
      <Footer />
    </main>
  );
};

export default Home;
