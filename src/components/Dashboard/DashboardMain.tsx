"use client";
import { useState } from "react";
import DashboardGraphics from "./DashboardGraphics";
import DashboardOptions from "./DashboardOptions";

export function DashboardMain({ posts }: { posts: any[] }) {
  // TODO PLACE A PLACEHOLDER IF NO POSTS
  if (!posts || posts.length === 0) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white">
        <p>Error: No posts available!</p>
      </div>
    );
  }
  const [selectedPost, setSelectedPost] = useState(posts[0]?._id || "");
  function handleSelectedPost(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedPost(e.target.value);
  }

  const post = posts
    .filter((post) => {
      return post._id === selectedPost;
    })
    .flatMap((post) => post);

  return (
    <div className="w-[1200px]  max-w-[90vw] mx-auto">
      <h1 className=" mb-2 md:mb-4 text-4xl font-bold text-black">Dashboard</h1>
      <select
        onChange={handleSelectedPost}
        className="pl-2 pr-2 pt-1 pb-1 border border-gray-300 rounded-md "
      >
        <option value="" hidden>
          Choose a post
        </option>
        {posts.map((post: any) => {
          const idShort = post._id.slice(post._id.length - 4);
          return (
            <option key={idShort} value={post._id}>
              {idShort}
            </option>
          );
        })}
      </select>
      <div className="flex flex-col-reverse md:flex-row col gap-2">
        <DashboardOptions />
        <DashboardGraphics post={post} />
      </div>
    </div>
  );
}

export default DashboardMain;
