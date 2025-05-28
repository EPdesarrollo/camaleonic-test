"use client";
import { PostType } from "@/types/post";
import BarChart from "./Charts/BarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import PolarAreaChart from "./Charts/PolarAreaChart";
import RadarChart from "./Charts/RadarChart";

export function DashboardGraphics({
  post,
  selectedChart,
}: {
  post: PostType;
  selectedChart: "BarChart" | "DoughnutChart" | "PolarAreaChart" | "RadarChart";
}) {
  if (selectedChart === "DoughnutChart") {
    return (
      <section className="m-auto mt-2 w-full  md:w-[400px] flex justify-center">
        <DoughnutChart post={post} />
      </section>
    );
  }
  if (selectedChart === "PolarAreaChart") {
    return (
      <section className="m-auto mt-2 w-full  md:w-[400px] flex justify-center">
        <PolarAreaChart post={post} />
      </section>
    );
  }
  if (selectedChart === "RadarChart") {
    return (
      <section className="m-auto mt-2 w-full  md:w-[400px] flex justify-center">
        <RadarChart post={post} />
      </section>
    );
  }
  if (selectedChart === "BarChart") {
    return (
      <section className="m-auto mt-2 w-full  md:w-[750px] flex justify-center">
        <BarChart post={post} />
      </section>
    );
  }
}

export default DashboardGraphics;
