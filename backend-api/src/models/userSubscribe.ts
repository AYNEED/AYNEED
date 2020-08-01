import { Schema, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';

const UserSubscribeSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipientId: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  schemaOptions
);

export const UserSubscribeModel = model('UserSubscribe', UserSubscribeSchema);
