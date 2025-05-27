"use client";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  Filler,
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(
  Tooltip,
  Legend,
  Filler,
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
    title: {
      display: true,
      text: "POST INTERACTIONS",
    },
  },
};

export const data = {
  labels: ["Likes", "Comments", "Shares", "Saves", "Unlikes", "Reports"],
  datasets: [
    {
      label: "Number of interactions",
      data: [34, 56, 12, 65, 43, 2],
      fill: true,
      backgroundColor: "rgba(25, 99, 132, 0.3)",
      borderColor: "rgba(25, 99, 132, 1)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
  ],
};

export function RadarChart() {
  return <Radar options={options} data={data} />;
}

export default RadarChart;
