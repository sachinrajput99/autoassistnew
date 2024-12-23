import React from 'react';
import {DashboardPic} from "../assets/index"
const Dashboard = () => {
  return (
    <div>
      <div>
        <p className=" text-4xl font-semibold text-gradient text-center">Dynamic Admin Dashboard</p>
        <div className="mt-8 flex justify-center items-center">
          <img
            src={DashboardPic}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
