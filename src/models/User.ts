import mongoose from 'mongoose';
import { Schema } from 'mongoose';

type UserProps = {
  name: string;
  username: string;
  createdAt: Date;
};

const UserSchema = new Schema({
  name: String,
  username: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.model<UserProps>('User', UserSchema);

// export default User;
