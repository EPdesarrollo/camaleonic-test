"use client";
import { useState } from "react";

const data = [
  {
    id: 1,
    date: "24/08",
    likes: 23,
    comments: 2,
    shares: 4,
  },
  {
    id: 2,
    date: "25/08",
    likes: 30,
    comments: 5,
    shares: 8,
  },
];

export function PostRow() {
  const [showForm, setShowForm] = useState(false);
  function handleShowForm() {
    setShowForm(!showForm);
  }

  return (
    <div>
      {data.map((post) => {
        return (
          <div key={post.id} className="mt-2 flex col gap-1 md:gap-2">
            <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-sm">
              <p>1</p>
            </div>
            <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-sm">
              <p>24/08</p>
            </div>
            <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>23</p>
            </div>
            <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>2</p>
            </div>
            <div className="w-1/5 px-2 py-1 grid place-items-center bg-gray-200 text-sm flex items-center justify-center">
              <p>4</p>
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
        <div className="w-screen h-screen fixed top-0 left-0 grid place-items-center bg-gray-900/50 backdrop-blur-xs">
          <form className="w-[700px] max-w-[90vw] mt-4 p-4 md:p-8 bg-slate-800 rounded-md relative">
            <textarea
              rows={10}
              className="w-full  p-2 bg-white border border-gray-300 rounded-md "
              placeholder="Write your post here..."
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-4 py-1 md:px-4 md:py-2   bg-blue-500 text-sm md:text-base text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
            <button
              onClick={handleShowForm}
              type="button"
              className="mt-2 ml-3 px-4 py-1 md:px-4 md:py-2   bg-red-500 text-sm md:text-base text-white rounded-md hover:bg-red-800 transition duration-200"
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PostRow;
