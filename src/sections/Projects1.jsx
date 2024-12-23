import { useState } from 'react';
import { myProjects } from '../constants/index.js';
import { useInView } from 'react-intersection-observer'; // Import intersection observer
import { Driver1 } from '../assets/index.js';

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

  // List items for Driver App
  const listItems = [
    'Switch into your online status seamlessly and easily manage documents and approvals.',
    'Stay on top of your earnings with our dashboard.',
    'Get real-time location updates during trips.',
    'Start rides securely with our OTP feature.',
    'Cancel rides with dynamic cancellation reasons before starting if needed.',
    'Add money to your wallet with debit/credit cards.',
    'Our API ensures fair fares by factoring in distance and real-time traffic, benefiting both drivers and riders.',
    'Access multiple currency support.',
    'Real-time SOS notifications for immediate assistance.',
    'Participate in our referral program for extra rewards.',
    'Chat with users directly in-app and connect with the rider via call.',
    'Keep track of your ride history with trip status filters.',
    'Bubble and wakeup functionality-Android.'
  ];

  return (
    <section className="c-space my-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              ref={imgRef}
              src={currentProject.spotlight}
              alt="spotlight"
              className={`w-full h-96 object-cover rounded-xl transition-all transform duration-1000 ${imgInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
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
              Driver App
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

          <div className="flex items-center justify-between flex-wrap gap-5">
            {/* Optional tags or other items */}
          </div>
        </div>

        <div className=" bg-black border  border-gray-900   rounded-lg  h-[700px]  overflow-hidden">
          <img src={Driver1} alt="" className="w-full h-full object-contain  rounded-3xl " />
        </div>
      </div>
    </section>
  );
};

export default Projects2;
