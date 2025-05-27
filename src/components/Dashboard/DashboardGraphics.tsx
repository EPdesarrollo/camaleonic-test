"use client";
import BarChart from "./Charts/Chart1";
import DoughnutChart from "./Charts/Chart2";
import PolarAreaChart from "./Charts/Chart3";
import RadarChart from "./Charts/Chart4";

export function DashboardGraphics({ post }: { post: any[] }) {
  return (
    <section className="m-auto mt-8 w-full md:w-[550px] lg:w-[650px]">
      <BarChart post={post} />
      <DoughnutChart post={post} />
      <PolarAreaChart post={post} />
      <RadarChart post={post} />
    </section>
  );
}

export default DashboardGraphics;
