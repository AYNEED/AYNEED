import { Schema, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';

const SubscriptionUserScheme = new Schema(
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
  },
  schemaOptions
);

export const SubscriptionUserModel = model(
  'UserSubscribe',
  SubscriptionUserScheme
);
