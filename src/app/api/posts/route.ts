import dbConnect from "@/lib/dbConnection";
import User from "@/models/User";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("user");
    if (!username) {
      return Response.json({ message: "User not found", status: 400 });
    }

    await dbConnect();

    const user = await User.findOne({ username: username }).populate("posts");
    if (!user) {
      return Response.json({ message: "User not found", status: 404 });
    }
    return Response.json({ posts: user.posts, status: 200 });
  } catch (err) {
    return Response.json({ message: "Error creating post", status: 500 });
  }
}
