"use client";
import { PostType } from "@/types/post";
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
import { options, dataOptionsRadar } from "@/lib/chartOptions";

ChartJS.register(
  Tooltip,
  Legend,
  Filler,
  RadarController,
  LineElement,
  PointElement,
  RadialLinearScale
);

export function RadarChart({ post }: { post: PostType }) {
  const { likes, comments, shares, saves, unlikes, reports } = post;
  const data = dataOptionsRadar(
    likes,
    comments,
    shares,
    saves,
    unlikes,
    reports
  );
  return <Radar options={options} data={data} />;
}

export default RadarChart;
