"use server";

import dbConnect from "@/lib/dbConnection";
import Post from "@/models/Post";
import User from "@/models/User";
import { redirect } from "next/navigation";

export async function addPost(formData: FormData): Promise<void> {
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
    await dbConnect();
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
  } catch {
    redirect("/");
  }
  redirect("/tables");
}

export async function addUser(
  userSessionName: string,
  userSessionEmail: string
): Promise<{ message: string; status: number }> {
  try {
    // session check
    if (!userSessionName || !userSessionEmail) {
      return { message: "Unauthorized", status: 403 };
    }

    // database
    await dbConnect();
    const user = await User.findOne({ username: userSessionName });
    if (user) {
      return { message: "User found", status: 200 };
    }
    const newUser = new User({
      username: userSessionName,
      email: userSessionEmail,
    });
    await newUser.save();
    return { message: "User created!", status: 200 };
  } catch {
    return { message: "Error", status: 500 };
  }
}
