"use server";

import Post from "@/models/Post";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addPost(formData: FormData) {
  try {
    const postText = formData.get("text");
    if (!postText || typeof postText !== "string") {
      throw new Error();
    }
    const newPost = new Post({
      text: postText,
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 100),
      shares: Math.floor(Math.random() * 100),
    });
    await newPost.save();
  } catch (err) {
    // return false;
  }
  redirect("/tables");
}
