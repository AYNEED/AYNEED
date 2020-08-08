import { MessageRes, MessageModel } from 'src/models/message';
import { MutationAddMessageArgs } from 'src/__generated__';

export const createMessage = async ({
  text,
  senderId,
  targetId,
}: MutationAddMessageArgs): Promise<MessageRes> =>
  MessageModel.create({
    info: {
      text,
      isRead: false,
    },
    users: {
      senderId,
      targetId,
    },
    visible: {
      isVisibleAuthor: true,
      isVisibleAll: true,
    },
    editAt: null,
    deleteAt: null,
  });
