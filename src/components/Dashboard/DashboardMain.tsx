"use client";
import BarChart from "./Charts/Chart1";
import DoughnutChart from "./Charts/Chart2";
import PolarAreaChart from "./Charts/Chart3";
import RadarChart from "./Charts/Chart4";

export function DashboardMain() {
  return (
    <section className="m-auto mt-8 w-full md:w-[550px] lg:w-[650px]">
      <BarChart />
      <DoughnutChart />
      <PolarAreaChart />
      <RadarChart />
      {/* <div className="">
        <img src="/placeholderGraphics.png" className="w-full" />
      </div> */}
    </section>
  );
}

export default DashboardMain;
