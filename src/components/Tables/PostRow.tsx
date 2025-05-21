"use client";
import { useState } from "react";

const data = [
  {
    id: 1,
    date: "24/08",
    likes: 23,
    comments: 2,
    shares: 4,
    saves: 12,
  },
  {
    id: 2,
    date: "25/08",
    likes: 30,
    comments: 5,
    shares: 8,
    saves: 15,
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
          <div key={post.id} className="mt-2 flex col gap-2">
            <div className="w-3/5 bg-gray-200 px-6 py-2">
              <p>1</p>
            </div>
            <div className="w-36 bg-gray-200 px-6 py-2">
              <p>24/08</p>
            </div>
            <div className="w-36 bg-gray-200 px-6 py-2 flex items-center justify-center">
              <p>23</p>
            </div>
            <div className="w-36 bg-gray-200 px-6 py-2 flex items-center justify-center">
              <p>2</p>
            </div>
            <div className="w-36 bg-gray-200 px-6 py-2 flex items-center justify-center">
              <p>4</p>
            </div>
            <div className="w-36 bg-gray-200 px-6 py-2 flex items-center justify-center">
              <p>12</p>
            </div>
          </div>
        );
      })}
      <button
        onClick={handleShowForm}
        className="mt-4 px-4 py-2  bg-blue-500 text-white  rounded-md hover:bg-blue-600 transition duration-200"
      >
        + Add Post
      </button>
      {showForm && (
        <div className="w-screen h-screen fixed top-0 left-0 grid place-items-center bg-gray-900/50 backdrop-blur-xs">
          <form className="w-3/4 mt-4 p-8 bg-slate-800 rounded-md relative">
            <button
              onClick={handleShowForm}
              className="absolute top-1 right-2 text-red-600 text-3xl"
            >
              &times;
            </button>
            <textarea
              className="w-full h-32 p-2 bg-white border border-gray-300 rounded-md "
              placeholder="Write your post here..."
            ></textarea>
            <button
              type="submit"
              className="mt-2 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default PostRow;
