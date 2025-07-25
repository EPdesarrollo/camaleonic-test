import mongoose from "mongoose";
const { Schema } = mongoose;

interface Post extends mongoose.Document {
  text: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  unlikes: number;
  reports: number;
  user: mongoose.Types.ObjectId;
}

const PostSchema = new Schema<Post>(
  {
    text: { type: String, required: true },
    likes: { type: Number, required: true },
    comments: { type: Number, required: true },
    shares: { type: Number, required: true },
    saves: { type: Number, required: true },
    unlikes: { type: Number, required: true },
    reports: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model<Post>("Post", PostSchema);
