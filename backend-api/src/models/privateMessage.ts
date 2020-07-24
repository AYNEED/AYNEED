import { Schema, model } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';

export type MessageIdInfo = {
  //Id диалога
  messageDialogId: string;
  //Id отправителя
  messageAuthorId: string;
  //Id получателя
  messageRecipientId: string;
};

export type MessageVisible = {
  //При удалении только у себя
  messageIsVisibleSender: boolean;
  //При удалении у обоих
  messageIsVisibleAll: boolean;
};

export type MessageDateInfo = {
  messageSendTime: string;
  messageEditTime: string;
  //Время удаления
  messageDeleteTime: string;
};

export type MessagePublicInfo = {
  messageText: string;
  //Отчет о прочтении
  messageIsRead: boolean;
  messageParentId: string;
  //Привязанный контент
  messageContent: string;
};

const MessageDateInfoSchema = new Schema<MessageIdInfo>({
  messageSendTime: {
    type: Date,
  },
  messageEditTime: {
    type: Date,
  },
  //Время удаления
  messageDeleteTime: {
    type: Date,
  },
});

const MessagePublicInfoSchema = new Schema<MessageVisible>({
  messageText: {
    type: String,
    required: true,
  },
  //Отчет о прочтении
  messageIsRead: {
    type: Boolean,
    required: true,
  },
  messageParentId: {
    type: String,
  },
  //Привязанный контент
  messageContent: {
    type: String,
  },
});

const MessageIdInfoSchema = new Schema<MessageDateInfo>({
  messageDialogId: {
    type: String,
  },
  messageAuthorId: {
    type: String,
    required: true,
  },
  messageRecipientId: {
    type: String,
    required: true,
  },
});

const MessageVisibleSchema = new Schema<MessagePublicInfo>({
  //При удалении только у себя
  messageIsVisibleSender: {
    type: Boolean,
  },
  //При удалении у обоих
  messageIsVisibleAll: {
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

export const PrivateMessage = model('User', PrivateMessageSchema);
