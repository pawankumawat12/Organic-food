// components/StatCard.jsx
import React from 'react';

const StatCard = ({ title, value }) => (
  <div className="flex-1 text-center p-4 bg-white rounded-xl shadow-md">
    <h3 className="text-2xl font-bold">{value}</h3>
    <p className="text-sm text-gray-500">{title}</p>
  </div>
);

export default StatCard;
