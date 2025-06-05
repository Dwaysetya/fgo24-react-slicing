import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AdminPage = () => {
  const [movie, setMovie] = useState("Avengers: End Game");
  const [timeFrame, setTimeFrame] = useState("Weekly");
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  const getChartData = () => ({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data:
          movie === "Avengers: End Game"
            ? [200, 400, 800, 600, 300, 400]
            : [100, 300, 500, 200, 400, 300],
        fill: true,
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderColor: "rgba(59, 130, 246, 1)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: getChartData(),
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [movie, timeFrame]);

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Sales Chart</h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0 mb-4">
        <select
          className="p-2 border rounded w-full sm:w-auto"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        >
          <option>Avengers: End Game</option>
          <option>Another Movie</option>
        </select>
        <select
          className="p-2 border rounded w-full sm:w-auto"
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
        >
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>
      <p className="text-gray-600 mb-2">{movie}</p>
      <div className="relative w-full h-64 sm:h-96">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default AdminPage;
