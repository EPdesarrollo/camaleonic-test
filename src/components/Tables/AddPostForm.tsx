"use client";
import { addPost } from "@/app/actions";

export function AddPostForm({
  handleShowForm,
  userSession,
}: {
  handleShowForm: () => void;
  userSession: string;
}) {
  const user = userSession;
  if (!user) {
    return (
      <div className="w-screen h-screen fixed top-0 left-0 grid place-items-center bg-white backdrop-blur-xs">
        <div className="w-[700px] max-w-[90vw] mt-4 p-4 md:p-8 bg-slate-800 rounded-md">
          <p className="text-white">Please log in to add a post.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen fixed top-0 left-0 grid place-items-center bg-gray-900/50 backdrop-blur-xs">
      <form
        action={addPost}
        className="w-[700px] max-w-[90vw] mt-4 p-4 md:p-8 bg-slate-800 rounded-md relative"
      >
        <input name="user" hidden defaultValue={user} />
        <textarea
          required
          rows={10}
          className="w-full  p-2 bg-white border border-gray-300 rounded-md "
          placeholder="Write your post here..."
          name="text"
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
  );
}

export default AddPostForm;
