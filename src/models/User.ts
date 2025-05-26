import mongoose from "mongoose";
const { Schema } = mongoose;

export interface User extends mongoose.Document {
  username: string;
  email: string;
  posts: mongoose.Types.ObjectId[];
}

const UserSchema = new Schema<User>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model<User>("User", UserSchema);
