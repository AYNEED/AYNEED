import { Schema, model, Document } from 'mongoose';

import { User } from 'src/__generated__';

type UserRes = Document & Omit<User, 'isOnline'>;
type UserReq = Omit<UserRes, 'createdAt'>;

const UserSchema = new Schema<UserReq>(
  {
    personal: {
      firstName: {
        type: String,
        default: '',
      },
      lastName: {
        type: String,
        default: '',
      },
    },
  },
  {
    id: true,
    versionKey: true,
    timestamps: true,
  }
);

export const UserModel = model<UserReq, UserRes>('User', UserSchema);
