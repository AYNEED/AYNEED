import { Schema, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';

const MessageDateInfoSchema = new Schema<never>({
  // Delayed message sending
  sendAt: {
    type: Date,
  },
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
  },
  // Response to a specific message
  parentId: {
    type: String,
  },
  // Message content (images, audio, video...)
  content: {
    type: String,
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
  },
  // If author delete message for all
  isVisibleAll: {
    type: Boolean,
    required: true,
  },
});

const PrivateMessageSchema = new Schema(
  {
    DateInfoSchema: {
      type: MessageDateInfoSchema,
    },
    PublicInfoSchema: {
      type: MessagePublicInfoSchema,
      required: true,
    },
    IdInfoSchema: {
      type: MessageIdInfoSchema,
      required: true,
    },
    VisibleSchema: {
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
