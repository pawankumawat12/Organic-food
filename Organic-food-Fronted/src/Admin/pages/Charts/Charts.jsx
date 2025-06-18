import React from "react";
import { Bar, Line } from "react-chartjs-2";
import './Charts.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Sample Data
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const barData = {
  labels,
  datasets: [
    {
      label: "Total Orders",
      data: [30, 45, 60, 40, 75, 90],
      backgroundColor: "#3b82f6",
    },
  ],
};

const lineData = {
  labels,
  datasets: [
    {
      label: "Revenue (in ₹K)",
      data: [50, 80, 60, 100, 90, 120],
      borderColor: "#10b981",
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      tension: 0.3,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

const ChartsSection = () => {
  return (
    <div className="charts-section">
  <div className="chart-card">
    <h3>Order Stats (Bar Graph)</h3>
    <Bar data={barData} options={options} />
  </div>

  <div className="chart-card">
    <h3>Monthly Revenue (Line Chart)</h3>
    <Line data={lineData} options={options} />
  </div>
</div>

  );
};

export default ChartsSection;
