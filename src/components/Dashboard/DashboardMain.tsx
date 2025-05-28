"use client";
import { useState } from "react";
import { PostType } from "@/types/post";
import DashboardGraphics from "./DashboardGraphics";
import DashboardOptions from "./DashboardOptions";

export function DashboardMain({ posts }: { posts: PostType[] }) {
  const [selectedPost, setSelectedPost] = useState(posts[0]?._id || "");
  const [selectedChart, setSelectedChart] = useState<
    "BarChart" | "DoughnutChart" | "PolarAreaChart" | "RadarChart"
  >("DoughnutChart");
  function handleSelectedPost(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedPost(e.target.value);
  }
  function handleSelectedChart(
    chartType: "BarChart" | "DoughnutChart" | "PolarAreaChart" | "RadarChart"
  ) {
    setSelectedChart(chartType);
  }

  const post = posts.filter((post) => {
    return post._id === selectedPost;
  });

  const postTitle = post[0]._id.slice(post[0]._id.length - 4);

  return (
    <div className="w-[1000px]  max-w-[90vw] mx-auto ">
      {/* <h1 className=" mb-2 md:mb-4 text-4xl font-bold text-black">Dashboard</h1> */}
      <h1 className="mt-1 mb-2 md:mb-2 text-3xl font-bold text-white text-center">
        Post: {postTitle}
      </h1>
      <select
        onChange={handleSelectedPost}
        className="block mx-auto mb-2 p-1 bg-white border border-gray-300 rounded-md text-sm"
      >
        <option value="" hidden>
          Choose a post
        </option>
        {posts.map((post: PostType) => {
          const idShort = post._id.slice(post._id.length - 4);
          return (
            <option key={idShort} value={post._id}>
              {idShort}
            </option>
          );
        })}
      </select>
      <div className="flex flex-col-reverse  md:flex-row col gap-2  bg-white p-5 rounded-2xl">
        <DashboardOptions handleSelectedChart={handleSelectedChart} />
        <DashboardGraphics post={post[0]} selectedChart={selectedChart} />
      </div>
    </div>
  );
}

export default DashboardMain;
