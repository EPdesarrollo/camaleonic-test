"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { options, dataOptions } from "@/lib/chartOptions";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart({ post }: { post: any[] }) {
  const { likes, comments, shares, saves, unlikes, reports } = post[0];
  const data = dataOptions(likes, comments, shares, saves, unlikes, reports);
  return <Doughnut options={options} data={data} />;
}

export default DoughnutChart;
