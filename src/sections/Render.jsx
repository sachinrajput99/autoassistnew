import React, { useState } from 'react';
import SliderComponent from './SliderComponent';

const Render = () => {
  const [currentTab, setCurrentTab] = useState('customerApp'); // Default tab

  return (
    <div className="bg-black p-4">
      {/* Tab navigation */}
      {/* mobile view */}
      <div className="grid grid-cols-2 justify-around bg-[#1f1f24] p-4 shadow rounded gap-7 sm:hidden">
        {['CustomerApp', 'DriverApp', 'Website', 'AdminPanel'].map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 
        ${
          currentTab === tab
            ? 'bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-transparent bg-clip-text'
            : 'bg-[#7c7c81] text-gray-900'
        }`}>
            {tab.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>
      {/* on desktop */}
      <div className="flex justify-around bg-[#1f1f24] p-4 shadow rounded flex-wrap gap-7 sm:flex ">
        {['CustomerApp', 'DriverApp', 'Website', 'AdminPanel'].map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-6 py-3 text-lg font-semibold  rounded-full transition-all duration-300 
              ${
                currentTab === tab
                  ? 'bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white bg-clip-text'
                  : 'bg-[#8b8b8b] text-white'
              }`}>
            {tab.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>

      {/* Render the content */}
      <div className="mt-4">
        <SliderComponent />
      </div>
    </div>
  );
};

export default Render;
