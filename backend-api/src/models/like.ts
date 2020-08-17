import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Like, LikeTargetModel, LikeStatus } from 'src/__generated__';

export type LikeRes = Document & Like;
type LikeReq = Omit<LikeRes, 'createdAt'>;

const LikeSchema = new Schema<LikeReq>(
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
      enum: Object.values(LikeTargetModel),
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(LikeStatus),
      required: true,
    },
  },
  schemaOptions
);

export const LikeModel = model<LikeReq, LikeRes>('Like', LikeSchema);
