import mongoose from 'mongoose';
import { Schema } from 'mongoose';

type PostProps = Document & {
  content: String;
  author: String;
};

const PostSchema = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Post = mongoose.model<PostProps>('Post', PostSchema);

export default Post;
