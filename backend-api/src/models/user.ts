import { Schema, model, Document } from 'mongoose';

import { User as GUser } from 'src/__generated__';

type User = Document & Omit<GUser, 'isOnline'>;

const UserSchema = new Schema<User>(
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
    versionKey: false,
    timestamps: true,
  }
);

export const UserModel = model<User>('User', UserSchema);
