import { useState } from 'react';
import { myProjects } from '../constants/index.js';
import { useInView } from 'react-intersection-observer'; // Import intersection observer
import { Dashboard0, DashboardPic, User2 } from '../assets/index.js';
import Dashboard from './Dashboard.jsx';

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

  // List items for Admin Portal
  const listItems = [
    'Real-time Dashboard in Admin Panel.',
    'Document Configuration.',
    'Admin App Menu Roles & Permissions.',
    'Settings & Configurations Management.',
    'Geofencing & Zone creation.',
    'Multi-Currency Support.',
    'Price Configuration for Ride Now/Scheduled Ride.',
    'Heat Map Integration.',
    'God’s Eye (Driver Map View).',
    'Trip Request Management.',
    'User & Driver Management.',
    'SOS Number Configuration.',
    'Promo Code Setup.',
    'Surge Pricing & Timing Control.',
    'Cancellation Reasons Configuration.',
    'Complaint Category & State Management.',
    'Custom Push Notifications for Users & Drivers.',
    'User, Driver, Travel, and Financial Reports.',
    'FAQ Management.',
    'Ratings & Review Management.',
    'Live Tracking for Each Request.',
    'Airport Pickup/Drop Fee Configuration.'
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
              Admin Portal
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
          <img src={Dashboard0} alt="" className="w-full h-full object-contain  rounded-3xl " />
        </div>
      </div>
    </section>
  );
};

export default Projects2;
