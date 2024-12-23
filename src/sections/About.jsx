import { useState, useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInCard');
            observer.unobserve(entry.target); // Trigger animation only once
          }
        });
      },
      { threshold: 0.1 } // Trigger animation when 10% of the element is visible
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Box 1 */}
        <div
          className="col-span-1 xl:row-span-3 opacity-0 transform translate-x-[-50px]"
          ref={(el) => (cardRefs.current[0] = el)}
        >
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">For any budget</p>
              <p className="grid-subtext">
              From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.
              </p>
            </div>
          </div>
        </div>

        {/* Box 2 */}
        <div
          className="col-span-1 xl:row-span-3 opacity-0 transform translate-x-[-50px]"
          ref={(el) => (cardRefs.current[1] = el)}
        >
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">For any distance</p>
              <p className="grid-subtext">
              Book rides within the city with Daily, or take a trip to your favourite destinations outside the city with Outstation.
              </p>
            </div>
          </div>
        </div>

        {/* Box 3 */}
        <div
          className="col-span-1 xl:row-span-4 opacity-0 transform translate-x-[-50px]"
          ref={(el) => (cardRefs.current[2] = el)}
        >
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">For any duration</p>
              <p className="grid-subtext">Easily plan a day out without having to worry about conveyance with an hour-based package from Rental.</p>
            
            </div>
          </div>
        </div>

        {/* Box 4 */}
        <div
          className="xl:col-span-2 xl:row-span-3 opacity-0 transform translate-x-[-50px]"
          ref={(el) => (cardRefs.current[3] = el)}
        >
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">For any duration</p>
              <p className="grid-subtext">
              Easily plan a day out without having to worry about conveyance with an hour-based package from Rental.
              </p>
            </div>
          </div>
        </div>

        {/* Box 5 */}
        <div
          className="xl:col-span-1 xl:row-span-2 opacity-0 transform translate-x-[-50px]"
          ref={(el) => (cardRefs.current[4] = el)}
        >
          
        </div>
      </div>
    </section>
  );
};

export default About;
