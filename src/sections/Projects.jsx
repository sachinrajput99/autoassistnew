import { useState } from 'react';
import { myProjects } from '../constants/index.js';
import { useInView } from 'react-intersection-observer'; // Import intersection observer
import { User0, User1 } from '../assets/index.js';

const projectCount = myProjects.length;

const Projects2 = () => {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const currentProject = myProjects[selectedProjectIndex];

  // Intersection Observer Hooks for triggering animation when elements are near the viewport
  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Trigger when 20% of the element is in the viewport
  });

  const { ref: imgRef, inView: imgInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: buttonRef, inView: buttonInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animate each list item individually
  const listItems = [
    'Set pickup and drop-off locations on the map.',
    'Book a ride and view real-time ETA.',
    'View available cars on the map in real-time.',
    'Schedule a ride in advance.',
    'Save favourite locations for quicker booking.',
    'Apply promo codes for discounts in rental option.',
    'Choose payment method: cash, card, or wallet.',
    'Add money to your wallet using a debit or credit card.',
    'Support for multiple currencies.',
    'Real-time SOS notification to admin.',
    'Participate in our referral program.',
    'In-app chat between driver and user.',
    'Rental ride without exact pickup location.',
    'Access ride history and filter by trip status.',
    'Provide ratings and reviews after your ride.',
    'Cancel your ride with dynamic cancellation reasons.',
  ];

  return (
    <section className="c-space my-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full ">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              ref={imgRef}
              src={currentProject.spotlight}
              alt="spotlight"
              className={`w-full h-[400px] object-contain rounded-xl transition-all transform duration-1000 ${imgInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            />
          </div>

          <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
            <img
              ref={textRef}
              className={`w-10 h-10 shadow-sm transition-all duration-1000 ${textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              src={currentProject.logo}
              alt="logo"
            />
          </div>

          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p
              ref={textRef}
              className={`text-white text-2xl font-semibold animatedText transition-all transform duration-1000 ${textInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            >
              User App
            </p>
            <ol>
              {listItems.map((item, index) => {
                // Create a unique ref for each list item
                const { ref, inView } = useInView({
                  triggerOnce: true,
                  threshold: 0.2,
                });

                return (
                  <li
                    key={index}
                    ref={ref}
                    className={`transition-all transform duration-1000 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <span className="text-green-500 mr-2">✔</span>{item}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        <div className=" bg-black border  border-gray-900   rounded-lg  h-[700px]  overflow-hidden">
          <img src={User0} alt="" className="w-full h-full object-contain  rounded-3xl " />
        </div>
      </div>
    </section>
  );
};

export default Projects2;
