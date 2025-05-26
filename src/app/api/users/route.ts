import dbConnect from "@/lib/dbConnection";
import User from "@/models/User";

export async function POST(request: Request) {
  try {
    // session check
    const { session } = await request.json();
    if (!session) {
      return Response.json({ message: "Unauthorized", status: 403 });
    }
    const userSessionName = session.user?.nickname || null;
    const userSessionEmail = session.user?.email || null;

    if (!userSessionName || !userSessionEmail) {
      return Response.json({ message: "Unauthorized", status: 403 });
    }

    // database
    await dbConnect();
    const user = await User.findOne({ username: userSessionName });
    if (user) {
      return Response.json({ message: "User found", status: 200 });
    }
    const newUser = new User({
      username: userSessionName,
      email: userSessionEmail,
    });
    await newUser.save();
    return Response.json({ message: "User created!", status: 200 });
  } catch (err) {
    return Response.json({ message: "Error", status: 500 });
  }
}
