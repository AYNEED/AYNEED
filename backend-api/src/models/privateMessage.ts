import { Schema, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';

const MessageDateInfoSchema = new Schema<never>({
  editAt: {
    type: Date,
  },
  // Moment of deletion message
  deleteAt: {
    type: Date,
  },
});

const MessagePublicInfoSchema = new Schema<never>({
  text: {
    type: String,
    required: true,
  },
  // Read report
  isRead: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const MessageIdInfoSchema = new Schema<never>({
  authorId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recipientId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const MessageVisibleSchema = new Schema<never>({
  // If author delete message only for yourself
  isVisibleAuthor: {
    type: Boolean,
    required: true,
    default: true,
  },
  // If author delete message for all
  isVisibleAll: {
    type: Boolean,
    required: true,
    default: true,
  },
});

const PrivateMessageSchema = new Schema(
  {
    dateInfoSchema: {
      type: MessageDateInfoSchema,
    },
    publicInfoSchema: {
      type: MessagePublicInfoSchema,
      required: true,
    },
    idInfoSchema: {
      type: MessageIdInfoSchema,
      required: true,
    },
    visibleSchema: {
      type: MessageVisibleSchema,
      required: true,
    },
  },
  schemaOptions
);

export const PrivateMessageModel = model(
  'PrivateMessage',
  PrivateMessageSchema
);
