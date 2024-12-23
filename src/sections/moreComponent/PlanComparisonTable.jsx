import React from 'react';

const PlanComparisonTable = () => {
  return (
    <div className="overflow-x-auto bg-black text-gray-400 p-4 sm:p-6 rounded-lg border border-gray-700">
      <div className="min-w-[600px] flex flex-col">
        {/* Header */}
        <div className="flex bg-gray-800 text-gray-300 border-b border-gray-700">
          <div className="flex-1 px-4 sm:px-6 py-2 sm:py-4 text-white font-semibold text-center">Plans</div>
          <div className="flex-1 px-4 sm:px-6 py-2 sm:py-4 text-center">Free</div>
          <div className="flex-1 px-4 sm:px-6 py-2 sm:py-4 text-center">Startup</div>
        </div>

        {/* Rows */}
        {[
          { plan: 'User App', free: '✔', startup: '✔' },
          { plan: 'Driver App', free: '✔', startup: '✔' },
          { plan: 'Employee App', free: '✔', startup: '✔' },
          { plan: 'Super Admin Panel', free: '✔', startup: '✔' },
          { plan: 'Website', free: '✔', startup: '✔' },
          { plan: 'Dispatcher Panel', free: '✔', startup: '✔' },
          { plan: 'Customization', free: '-', startup: '✔' },
          { plan: 'Email', free: '-', startup: '✔' },
          { plan: 'Advance Pay', free: '-', startup: '✔' },
        ].map((row, index) => (
          <div key={index} className={`flex border-b border-gray-700 ${index % 2 === 0 ? 'bg-black' : 'bg-gray-900'}`}>
            <div className="flex-1 px-4 sm:px-6 py-2 sm:py-4 text-center">{row.plan}</div>
            <div className="flex-1 px-4 sm:px-6 py-2 sm:py-4 text-center text-green-500">{row.free}</div>
            <div className="flex-1 px-4 sm:px-6 py-2 sm:py-4 text-center text-green-500">{row.startup}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanComparisonTable;
