import React from 'react';

const ApplicationCard = ({ downloadStore, type, logo, image, image3 }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 lg:p-10">
      {/* Type */}
      <p className="text-2xl lg:text-4xl text-white  font-semibold mb-4">{type}</p>
      {/* Download Store */}
      <p className="text-lg lg:text-xl text-gray-300  font-semibold">Download free app from {downloadStore}</p>
      {/* App Sections */}
      <div className="ml-2 lg:ml-4 my-6">
        {/* Titles */}
        <div className="flex flex-col lg:flex-row lg:gap-16 mb-4">
          <p className="text-gray-300  lg:text-xl font-serif font-semibold">Customer App</p>
          <p className="text-gray-300   lg:text-xl font-serif font-semibold">Driver App</p>
        </div>
        {/* Logos */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-20">
          <img src={logo} alt="Customer App Logo" className="w-24 lg:w-32" />
          <img src={logo} alt="Driver App Logo" className="w-24 lg:w-32" />
        </div>
      </div>
      {/* Images Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 relative">
        <img src={image} alt="Main Image" className="absolute lg:static left-0 lg:left-72 w-24 lg:w-32" />
        <img src={image3} alt="Overlay Image" className="w-48 lg:w-64" />
      </div>
    </div>
  );
};

export default ApplicationCard;
