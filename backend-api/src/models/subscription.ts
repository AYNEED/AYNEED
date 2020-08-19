import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import {
  SubscribedUser,
  SubscriptionTargetModel,
  SubscriptionStatus,
} from 'src/__generated__';

export type SubscriptionRes = Document & SubscribedUser;
type SubscriptionReq = Omit<SubscriptionRes, 'createdAt'>;

const SubscriptionScheme = new Schema<SubscriptionReq>(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    targetId: {
      type: Schema.Types.ObjectId,
      refPath: 'targetModel',
      required: true,
    },
    targetModel: {
      type: String,
      enum: Object.values(SubscriptionTargetModel),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(SubscriptionStatus),
      required: true,
    },
  },
  schemaOptions
);

export const SubscriptionModel = model<SubscriptionReq, SubscriptionRes>(
  'Subscription',
  SubscriptionScheme
);
