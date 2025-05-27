"use client";
import { useState } from "react";
import AddPostForm from "./AddPostForm";

export function PostTable({
  posts,
  userSession,
}: {
  posts: any;
  userSession: any;
}) {
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <div>
      {posts.map((post: any) => {
        const idShort = post._id.slice(post._id.length - 4);
        const date = new Date(post.createdAt);
        const options: Intl.DateTimeFormatOptions = {
          year: "numeric",
        };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
          date
        );

        return (
          <div key={post._id} className="mt-2 flex col gap-1 md:gap-2">
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
    </div>
  );
}

export default PostTable;
