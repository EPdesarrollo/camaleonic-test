"use client";
import { PostType } from "@/types/post";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  ArcElement,
} from "chart.js";
import { options, dataOptions } from "@/lib/chartOptions";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  PolarAreaController,
  RadialLinearScale,
  ArcElement
);

export function PolarAreaChart({ post }: { post: PostType }) {
  const { likes, comments, shares, saves, unlikes, reports } = post;
  const data = dataOptions(likes, comments, shares, saves, unlikes, reports);
  return <PolarArea options={options} data={data} />;
}

export default PolarAreaChart;
