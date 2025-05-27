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
          month: "2-digit",
        };
        const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
          date
        );

        return (
          <div key={post._id} className="mt-2 flex col gap-1 md:gap-2">
            <div className=" w-1/6 px-2 py-1 grid place-items-center bg-gray-200 text-sm">
              <p>{idShort}</p>
            </div>
            <div className=" w-1/6 px-2 py-1 grid place-items-center bg-gray-200 text-sm">
              <p>{formattedDate}</p>
            </div>
            <div className=" w-1/6 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>{post.likes}</p>
            </div>
            <div className=" w-1/6 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>{post.comments}</p>
            </div>
            <div className=" w-1/6 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>{post.shares}</p>
            </div>
            <div className=" w-1/6 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>{post.saves}</p>
            </div>
            <div className=" w-1/6 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>{post.unlikes}</p>
            </div>
            <div className=" w-1/6 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>{post.reports}</p>
            </div>
          </div>
        );
      })}
      <button
        onClick={handleShowForm}
        className="mt-4 px-2 py-1 md:px-4 md:py-2  bg-blue-500 text-sm md:text-base text-white  rounded-md hover:bg-blue-600 transition duration-200"
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
