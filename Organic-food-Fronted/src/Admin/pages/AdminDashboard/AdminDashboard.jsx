import React from 'react';
import LiveCallChart from '../charts/LiveCallChart/LiveCallChart';
import ConversionsChart from '../charts/ConversessionChart/ConversionsChart';
import StatCard from '../charts/StateChart/StatChart';

const AdminDashboard = () => (
  <div className="p-6 space-y-6 bg-gray-100 min-h-screen">
    <div className="grid grid-cols-4 gap-4">
      <StatCard  title="Sale" value="750K" />
      <StatCard title="Cancels" value="7,500" />
      <StatCard title="Total Earned" value="7,500" />
      <StatCard title="Distributions" value="7,500" />
    </div>

    <div className="grid grid-cols-2 gap-4">
      <ConversionsChart />
      <LiveCallChart />
    </div>
  </div>
);

export default AdminDashboard;
