"use client";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  ArcElement
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
      backgroundColor: [
        "rgba(25, 99, 132, 0.5)",
        "rgba(85, 152, 112, 0.5)",
        "rgba(154, 162, 235, 0.5)",
        "rgba(225, 119, 32, 0.5)",
        "rgba(225, 219, 82, 0.5)",
        "rgba(205, 129, 182, 0.5)",
      ],
    },
  ],
};

export function PolarAreaChart() {
  return <PolarArea options={options} data={data} />;
}

export default PolarAreaChart;
