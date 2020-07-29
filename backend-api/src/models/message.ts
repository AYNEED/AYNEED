import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import { Message } from '../__generated__';

export type MessageRes = Document & Message;
type MessageReq = Omit<MessageRes, 'createdAt'>;

const MessageInfoSchema = new Schema<never>({
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

const MessageUsersSchema = new Schema<never>({
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

const MessageSchema = new Schema(
  {
    info: {
      type: MessageInfoSchema,
      required: true,
    },
    users: {
      type: MessageUsersSchema,
      required: true,
    },
    visible: {
      type: MessageVisibleSchema,
      required: true,
    },
    editAt: {
      type: Date,
    },
    // Moment of deletion message
    deleteAt: {
      type: Date,
    },
  },
  schemaOptions
);

export const MessageModel = model<MessageReq, MessageRes>(
  'Message',
  MessageSchema
);
