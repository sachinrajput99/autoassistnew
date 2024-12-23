import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import Features from './sections/Features.jsx';
import Render from './sections/Render.jsx';

import Dashboard from './sections/Dashboard.jsx';
import DownloadSection from './sections/DownloadSection.jsx';
import { useLayoutEffect } from 'react';
import FreePlanCard from './sections/moreComponent/FreePlanCard.jsx';
import PricingCard from './sections/moreComponent/PricingCard.jsx';
import PlanComparisonTable from './sections/moreComponent/PlanComparisonTable.jsx';

const App = () => {
  const images = [
    {
      src: 'https://via.placeholder.com/800x400.png?text=Image+1',
      alt: 'Image 1',
      caption: 'Our first project!',
    },
    {
      src: 'https://via.placeholder.com/800x400.png?text=Image+2',
      alt: 'Image 2',
      caption: 'A beautiful sunset.',
    },
    {
      src: 'https://via.placeholder.com/800x400.png?text=Image+3',
      alt: 'Image 3',
      caption: 'A stunning view.',
    },
  ];
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
      <div className="mb-10">
        {' '}
        <h1 className="text-white text-5xl font-semibold text-center mb-10 text-gradient ">Pricing</h1>
        <div className="flex gap-7  flex-col sm:flex-row">
          <FreePlanCard />
          <PricingCard />
        </div>
      </div>

      <PlanComparisonTable />
      <Clients />
      <div className="absolute">
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
      </div>
      <Footer />
    </main>
  );
};

export default App;
