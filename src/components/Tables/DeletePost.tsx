import { deletePost } from "@/app/actions";

export function DeletePost({
  postId,
  userSession,
}: {
  postId: string;
  userSession: string | null;
}) {
  return (
    <form action={deletePost}>
      <input hidden name="postId" defaultValue={postId}></input>
      <input name="user" hidden defaultValue={userSession!} />
      <button
        type="submit"
        className="mt-1 px-1     bg-red-500 text-[0.6rem]  text-white  rounded-sm hover:bg-red-600 transition duration-200"
      >
        Delete
      </button>
    </form>
  );
}

export default DeletePost;
