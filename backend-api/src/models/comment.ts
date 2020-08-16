import { Schema, Document, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Comment, CommentTargetModel } from 'src/__generated__';

export type CommentRes = Document & Comment;
type CommentReq = Omit<CommentRes, 'createdAt'>;

const CommentSchema = new Schema<CommentRes>(
  {
    parentId: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    senderId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    targetId: {
      type: Schema.Types.ObjectId,
      // @todo ref to model
      required: true,
    },
    targetModel: {
      type: String,
      enum: Object.values(CommentTargetModel),
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    likesCount: {
      type: Number,
      required: false,
      default: 0,
    },
    dislikesCount: {
      type: Number,
      required: false,
      default: 0,
    },
    commentsCount: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  schemaOptions
);

export const CommentModel = model<CommentReq, CommentRes>(
  'Comment',
  CommentSchema
);
