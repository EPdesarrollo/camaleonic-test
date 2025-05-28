"use client";
import { PostType } from "@/types/post";
import Link from "next/link";
import { useState } from "react";
import AddPostForm from "./AddPostForm";
import DeletePost from "./DeletePost";

export function DataTable({
  posts,
  userSession,
}: {
  posts: PostType[];
  userSession: string | null;
}) {
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <div>
      {posts.map((post: PostType) => {
        const idShort = post._id.slice(post._id.length - 4);
        const date = new Date(post.createdAt);
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
        };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
          date
        );

        return (
          <div key={post._id}>
            <div className="mt-1 flex col gap-1 md:gap-2">
              <div className=" w-1/6 px-1 py-1 grid place-items-center bg-gray-200 text-[0.6rem] md:text-sm">
                <p>{idShort}</p>
              </div>
              <div className=" w-1/6 px-1 py-1 grid place-items-center bg-gray-200 text-[0.6rem] md:text-sm">
                <p>{formattedDate}</p>
              </div>
              <div className=" w-1/6 px-1 py-1 grid place-items-center bg-gray-200 text-[0.6rem] md:text-sm ">
                <p>{post.likes}</p>
              </div>
              <div className=" w-1/6 px-1 py-1 grid place-items-center bg-gray-200 text-[0.6rem] md:text-sm ">
                <p>{post.comments}</p>
              </div>
              <div className=" w-1/6 px-1 py-1 grid place-items-center bg-gray-200 text-[0.6rem] md:text-sm ">
                <p>{post.shares}</p>
              </div>
              <div className=" w-1/6 px-1 py-1 grid place-items-center bg-gray-200 text-[0.6rem] md:text-sm ">
                <p>{post.saves}</p>
              </div>
              <div className=" w-1/6 px-1 py-1 grid place-items-center bg-gray-200 text-[0.6rem] md:text-sm ">
                <p>{post.unlikes}</p>
              </div>
              <div className=" w-1/6 px-1 py-1 grid place-items-center bg-gray-200 text-[0.6rem] md:text-sm ">
                <p>{post.reports}</p>
              </div>
            </div>
            <DeletePost postId={post._id} userSession={userSession} />
          </div>
        );
      })}
      <button
        onClick={handleShowForm}
        className="mt-4 px-2 py-1 md:px-3 md:py-1  bg-blue-500 text-[0.8rem] md:text-sm text-white  rounded-md hover:bg-blue-600 transition duration-200"
      >
        + Add Post
      </button>
      {showForm && (
        <AddPostForm
          handleShowForm={handleShowForm}
          userSession={userSession}
        />
      )}
      <Link href="/dashboard">
        <button className="mt-4 ml-4 px-2 py-1 md:px-3 md:py-1  bg-blue-500 text-[0.8rem] md:text-sm text-white  rounded-md hover:bg-blue-600 transition duration-200">
          Dashboard
        </button>
      </Link>
    </div>
  );
}

export default DataTable;
