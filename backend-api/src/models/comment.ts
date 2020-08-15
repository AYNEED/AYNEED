import { Schema, Document, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Comment, CommentTargetModel } from 'src/__generated__';

export type CommentRes = Document & Comment;
type CommentReq = Omit<CommentRes, 'createdAt'>;

const CommentSchema = new Schema<CommentRes>(
  {
    id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    commentId: {
      // under question
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
    content: {
      type: String,
      required: true,
    },
    likeCount: {
      type: Number,
      required: false,
      default: 0,
    },
    dislikeCount: {
      type: Number,
      required: false,
      default: 0,
    },
    commentCount: {
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
