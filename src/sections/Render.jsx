import { useState } from 'react';
import SliderComponent from './SliderComponent';

const Render = () => {
  const [currentTab, setCurrentTab] = useState('CustomerApp'); // Default tab

  return (
    <div className="bg-black p-4">
      {/* Tab navigation */}
      {/* mobile view */}
      <div className="grid grid-cols-2 justify-around bg-[#1f1f24] p-4 shadow rounded gap-7 sm:hidden">
        {['CustomerApp', 'DriverApp', 'Website', 'AdminPanel'].map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 ease-in-out 
            transform hover:scale-105 active:scale-95 hover:bg-gray-500 active:bg-gray-400
            ${
              currentTab === tab
                ? 'bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-transparent bg-clip-text'
                : 'bg-gray-600 text-gray-100'
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
            className={`px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 ease-in-out 
            transform hover:scale-105 active:scale-95 hover:bg-gray-600 active:bg-gray-500
              ${
                currentTab === tab
                  ? 'bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white bg-clip-text'
                  : 'bg-gray-700 text-white'
              }`}>
            {tab.replace(/([A-Z])/g, ' $1').trim()}
          </button>
        ))}
      </div>

      {/* Render the content */}
      <div className="mt-4">
        {currentTab === 'CustomerApp' && <SliderComponent />}
        {currentTab === 'DriverApp' && <SliderComponent />}
        {currentTab === 'Website' && <SliderComponent />}
        {currentTab === 'AdminPanel' && <SliderComponent />}
      </div>
    </div>
  );
};

export default Render;
