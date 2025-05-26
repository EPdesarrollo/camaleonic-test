import mongoose from "mongoose";
const { Schema } = mongoose;

interface Post extends mongoose.Document {
  text: string;
  likes: number;
  comments: number;
  shares: number;
}

const PostSchema = new Schema<Post>(
  {
    text: { type: String, required: true },
    likes: { type: Number, required: true },
    comments: { type: Number, required: true },
    shares: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Post || mongoose.model<Post>("Post", PostSchema);
