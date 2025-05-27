"use server";

import Post from "@/models/Post";
import User from "@/models/User";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function addPost(formData: FormData) {
  try {
    const userForm = formData.get("user");
    const postText = formData.get("text");
    if (!userForm || typeof userForm !== "string") {
      throw new Error();
    }
    if (!postText || typeof postText !== "string") {
      throw new Error();
    }

    // database
    const user = await User.findOne({ username: userForm });
    if (!user) {
      throw new Error();
    }
    const newPost = new Post({
      text: postText,
      likes: Math.floor(Math.random() * 100),
      comments: Math.floor(Math.random() * 100),
      shares: Math.floor(Math.random() * 100),
      saves: Math.floor(Math.random() * 100),
      unlikes: Math.floor(Math.random() * 100),
      reports: Math.floor(Math.random() * 10),
      user: user._id,
    });
    const postCreated = await newPost.save();
    if (!postCreated) {
      throw new Error();
    }
    user.posts.push(postCreated._id);
    await user.save();
  } catch (err) {}
  redirect("/tables");
}
