import React from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardLineChart2 from "components/Cards/CardLineChart2.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
import Cardprofile from "components/Cards/CardProfile.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

export default function Dashboard(props) {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart/>
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>
      <h1> </h1>
      <h1> </h1>
      <h1> </h1>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-6/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
  </div>
      </div>
    </>
  );
}
