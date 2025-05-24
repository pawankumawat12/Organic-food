// components/ConversionsChart.jsx
import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'S', english: 50, french: 70 },
  { name: 'M', english: 60, french: 100 },
  { name: 'T', english: 70, french: 80 },
  { name: 'W', english: 90, french: 120 },
  { name: 'T', english: 60, french: 140 },
  { name: 'F', english: 80, french: 100 },
  { name: 'S', english: 60, french: 90 },
];

const ConversionsChart = () => (
  <div className="bg-white p-4 rounded-xl shadow-md">
    <div className="flex justify-between mb-2">
      <h2 className="font-semibold">Conversions</h2>
      <span className="text-sm text-gray-400">This Week</span>
    </div>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="english" stackId="a" fill="#0B5FFF" />
        <Bar dataKey="french" stackId="a" fill="#2BEBC8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default ConversionsChart;
