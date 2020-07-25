import { Schema, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';

const MessageDateInfoSchema = new Schema<never>({
  sendTime: {
    type: Date,
    required: true,
  },
  editTime: {
    type: Date,
  },
  // Moment of deletion message
  deleteTime: {
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
  parentId: {
    type: String,
  },
  // Message content
  content: {
    type: String,
  },
});

const MessageIdInfoSchema = new Schema<never>({
  dialogId: {
    type: String,
  },
  authorId: {
    type: String,
    required: true,
  },
  recipientId: {
    type: String,
    required: true,
  },
});

const MessageVisibleSchema = new Schema<never>({
  // If author delete message only for yourself
  isVisibleAuthor: {
    type: Boolean,
  },
  // If author delete message for all
  isVisibleAll: {
    type: Boolean,
  },
});

const PrivateMessageSchema = new Schema(
  {
    MessageDateInfoSchema: {
      type: MessageDateInfoSchema,
    },
    MessagePublicInfoSchema: {
      type: MessagePublicInfoSchema,
    },
    MessageIdInfoSchema: {
      type: MessageIdInfoSchema,
    },
    MessageVisibleSchema: {
      type: MessageVisibleSchema,
    },
  },
  schemaOptions
);

export const PrivateMessageModel = model(
  'PrivateMessage',
  PrivateMessageSchema
);
