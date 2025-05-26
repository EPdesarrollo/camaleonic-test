"use client";
import { useState } from "react";
import AddPostForm from "./AddPostForm";

export function PostTable({ posts }: { posts: any }) {
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <div>
      {posts.map((post: any) => {
        return (
          <div key={post._id} className="mt-2 flex col gap-1 md:gap-2">
            <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-sm">
              <p>{post._id}</p>
            </div>
            <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-sm">
              <p>{post.createdAt}</p>
            </div>
            <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>{post.likes}</p>
            </div>
            <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>{post.comments}</p>
            </div>
            <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>{post.shares}</p>
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
      {showForm && <AddPostForm handleShowForm={handleShowForm} />}
    </div>
  );
}

export default PostTable;
