import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import {
  Message,
  MessageInfoData,
  MessageUsersData,
  MessageVisibleData,
} from 'src/__generated__';

export type MessageRes = Document & Message;
type MessageReq = Omit<MessageRes, 'id' | 'createdAt'>;

const MessageInfoSchema = new Schema<MessageInfoData>({
  text: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const MessageUsersSchema = new Schema<MessageUsersData>({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  targetId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const MessageVisibleSchema = new Schema<MessageVisibleData>({
  // If sender delete message only for yourself
  isVisibleSender: {
    type: Boolean,
    required: true,
    default: true,
  },
  // If sender delete message for all
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
