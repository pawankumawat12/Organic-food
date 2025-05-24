import React from 'react';
import Chart from 'react-apexcharts';

const LiveCallChart = () => {
  const options = {
    labels: ['English', 'French', 'Accessories'],
    colors: ['#0B5FFF', '#2BEBC8', '#C8D1E1'],
    legend: {
      show: false
    }
  };

  const series = [251, 176, 176]; 

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between mb-2">
        <h2 className="font-semibold">Live calls</h2>
        <span className="text-sm text-gray-400">This Week</span>
      </div>
      <Chart options={options} series={series} type="donut" width="100%" />
      <div className="mt-4 space-y-1 text-sm text-gray-700">
        <div><span className="text-blue-600">●</span> English: <strong>251K</strong></div>
        <div><span className="text-teal-400">●</span> French: <strong>176K</strong></div>
        <div><span className="text-gray-400">●</span> Accessories: <strong>176K</strong></div>
      </div>
    </div>
  );
};

export default LiveCallChart;
