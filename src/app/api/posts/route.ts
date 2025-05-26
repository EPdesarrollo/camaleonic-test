import dbConnect from "@/lib/dbConnection";
import User from "@/models/User";
import Post from "@/models/Post";
import { text } from "stream/consumers";

export async function GET(request: Request) {
  try {
    // database
    await dbConnect();
    // const user = await User.find({});
    // console.log("user: ", user);
    const posts = await Post.find({});
    // const post = new Post({
    //   text: "Hi my name is Camaleonic",
    //   likes: Math.floor(Math.random() * 100),
    //   comments: Math.floor(Math.random() * 100),
    //   shares: Math.floor(Math.random() * 100),
    // });
    // await post.save();
    // console.log("post: ", posts);
    return Response.json({ posts, status: 200 });
  } catch (err) {
    console.log(err);
    return Response.json({ message: "Error creating post", status: 500 });
  }
}

// export async function POST(request: Request) {
//   try {
//     const { method } = request;
//     console.log("method: ", method);
//     return Response.json({ messaje: "Post posted!", status: 200 });
//   } catch (err) {
//     console.log(err);
//     return Response.json({ message: "Error creating post", status: 500 });
//   }
// }
