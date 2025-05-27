"use client";
import BarChart from "./Charts/BarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import PolarAreaChart from "./Charts/PolarAreaChart";
import RadarChart from "./Charts/RadarChart";

export function DashboardGraphics({
  post,
  selectedChart,
}: {
  post: any[];
  selectedChart: "BarChart" | "DoughnutChart" | "PolarAreaChart" | "RadarChart";
}) {
  if (selectedChart === "DoughnutChart") {
    return (
      <section className="m-auto mt-2 w-full  md:w-[400px] ">
        <DoughnutChart post={post} />
      </section>
    );
  }
  if (selectedChart === "PolarAreaChart") {
    return (
      <section className="m-auto mt-2 w-full  md:w-[400px]">
        <PolarAreaChart post={post} />
      </section>
    );
  }
  if (selectedChart === "RadarChart") {
    return (
      <section className="m-auto mt-2 w-full  md:w-[400px]">
        <RadarChart post={post} />
      </section>
    );
  }
  if (selectedChart === "BarChart") {
    return (
      <section className="m-auto mt-2 w-full  md:w-[750px]">
        <BarChart post={post} />
      </section>
    );
  }
}

export default DashboardGraphics;
