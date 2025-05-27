"use client";
import BarChart from "./Charts/Chart1";
import DoughnutChart from "./Charts/Chart2";
import PolarAreaChart from "./Charts/Chart3";
import RadarChart from "./Charts/Chart4";

export function DashboardGraphics({
  post,
  selectedChart,
}: {
  post: any[];
  selectedChart: "BarChart" | "DoughnutChart" | "PolarAreaChart" | "RadarChart";
}) {
  if (selectedChart === "DoughnutChart") {
    return (
      <section className="m-auto mt-8 w-full  md:w-[400px] ">
        <DoughnutChart post={post} />
      </section>
    );
  }
  if (selectedChart === "PolarAreaChart") {
    return (
      <section className="m-auto mt-8 w-full  md:w-[400px]">
        <PolarAreaChart post={post} />
      </section>
    );
  }
  if (selectedChart === "RadarChart") {
    return (
      <section className="m-auto mt-8 w-full  md:w-[400px]">
        <RadarChart post={post} />
      </section>
    );
  }
  if (selectedChart === "BarChart") {
    return (
      <section className="m-auto mt-8 w-full  md:w-[750px]">
        <BarChart post={post} />
      </section>
    );
  }
}

export default DashboardGraphics;
