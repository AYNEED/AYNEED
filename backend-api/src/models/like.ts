import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Like, LikeTargetType, LikeStatement } from 'src/__generated__';

export type LikeRes = Document & Like;
type LikeReq = Omit<LikeRes, 'createdAt'>;

const LikeSchema = new Schema<LikeReq>(
  {
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    targetId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    targetType: {
      type: String,
      enum: Object.values(LikeTargetType),
      required: true,
    },
    statement: {
      type: String,
      enum: Object.values(LikeStatement),
      required: true,
    },
  },
  schemaOptions
);

export const LikeModel = model<LikeReq, LikeRes>('Like', LikeSchema);
