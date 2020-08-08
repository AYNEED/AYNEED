import { Schema, Document, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { SubscriptionProject, ProjectStatement } from 'src/__generated__';

export type SubscriptionProjectRes = Document & SubscriptionProject;
type SubscriptionProjectReq = Omit<SubscriptionProjectRes, 'createdAt'>;

const SubscriptionProjectSchema = new Schema<SubscriptionProjectReq>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    targetId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(ProjectStatement),
      required: true,
    },
  },
  schemaOptions
);

export const SubscriptionProjectModel = model<
  SubscriptionProjectReq,
  SubscriptionProjectRes
>('SubscriptionProject', SubscriptionProjectSchema);
