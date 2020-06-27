import { Schema, model, Document } from 'mongoose';

import { User } from 'src/__generated__';

type UserRes = Document & Omit<User, 'isOnline'>;
type UserReq = Omit<UserRes, 'createdAt'>;

const UserSchema = new Schema<UserReq>(
  {
    personal: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
  },
  {
    id: true,
    versionKey: false,
    timestamps: true,
  }
);

export const UserModel = model<UserReq, UserRes>('User', UserSchema);
