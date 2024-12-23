import React from 'react';
import ApplicationCard from './ApplicationCard';
import { googleplaylogo } from '../assets/index.js';
import { androidimagetaxipart1, androidimagetaxipart2, androidimagetaxipart3, appstorelogo } from '../assets/index.js';

const DownloadSection = () => {
  return (
    <div className="p-4 lg:p-10">
      {/* Header */}
      <p className="mt-8 text-2xl sm:text-4xl font-semibold text-gradient text-center">Download Application</p>

      {/* Application Cards */}
      <div className="mt-8 flex justify-center items-center">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-16">
          {/* Android Card */}
          <ApplicationCard
            type="Android"
            downloadStore="Play Store"
            logo={googleplaylogo}
            image={androidimagetaxipart1}
            image2={androidimagetaxipart2}
            image3={androidimagetaxipart3}
          />

          {/* iOS Card */}
          <ApplicationCard
            type="iOS"
            downloadStore="App Store"
            logo={appstorelogo}
            image={androidimagetaxipart1}
            image2={androidimagetaxipart2}
            image3={androidimagetaxipart3}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;
