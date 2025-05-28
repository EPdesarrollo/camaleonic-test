"use client";
import { PostType } from "@/types/post";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { options, dataOptions } from "@/lib/chartOptions";

ChartJS.register(
  Tooltip,
  Legend,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale
);

export function BarChart({ post }: { post: PostType }) {
  const { likes, comments, shares, saves, unlikes, reports } = post;
  const data = dataOptions(likes, comments, shares, saves, unlikes, reports);

  return <Bar datasetIdKey="id" options={options} data={data} />;
}

export default BarChart;
