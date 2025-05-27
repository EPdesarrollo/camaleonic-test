"use client";

export function DashboardOptions({
  handleSelectedChart,
}: {
  handleSelectedChart: (
    chart: "BarChart" | "DoughnutChart" | "PolarAreaChart" | "RadarChart"
  ) => void;
}) {
  return (
    <section className="mt-5 mb-5 p-2 flex md:flex-col justify-center  gap-1 md:gap-4  rounded-2xl">
      <button
        onClick={() => handleSelectedChart("DoughnutChart")}
        className="border w-18 md:w-30  p-2 border-blue-100 shadow-lg rounded-2xl"
      >
        <img src="/chartDoughnut.png" className="w-full h-full  " />
      </button>
      <button
        onClick={() => handleSelectedChart("PolarAreaChart")}
        className="border w-18 md:w-30  p-2 border-blue-100 shadow-lg rounded-2xl"
      >
        <img src="/chartPolarArea.png" className="w-full h-full  " />
      </button>
      <button
        onClick={() => handleSelectedChart("RadarChart")}
        className="border w-18 md:w-30  p-2 border-blue-100 shadow-lg rounded-2xl"
      >
        <img src="/chartRadar.png" className="w-full h-full  " />
      </button>
      <button
        onClick={() => handleSelectedChart("BarChart")}
        className="border w-18 md:w-30  p-2 md:p-6 border-blue-100 shadow-lg rounded-2xl"
      >
        <img src="/chartBar.png" className="w-full h-full  " />
      </button>
    </section>
  );
}

export default DashboardOptions;
