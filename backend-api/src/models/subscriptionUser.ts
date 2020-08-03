import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { SubscriptionUser, StatusStatement } from 'src/__generated__';

export type SubscriptionUserRes = Document & SubscriptionUser;
type SubscriptionUserReq = Omit<SubscriptionUserRes, 'createdAt'>;

const SubscriptionUserScheme = new Schema<SubscriptionUserReq>(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    recipientId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    status: {
      type: String,
      enum: [
        StatusStatement.Waiting,
        StatusStatement.Accepted,
        StatusStatement.Rejected,
      ],
      required: true,
      default: 'waiting',
    },
  },
  schemaOptions
);

export const SubscriptionUserModel = model<
  SubscriptionUserReq,
  SubscriptionUserRes
>('UserSubscribe', SubscriptionUserScheme);
