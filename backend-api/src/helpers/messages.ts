import { MessageRes, MessageModel } from 'src/models/message';
import { MutationAddMessageArgs } from 'src/__generated__';

export const createMessage = async ({
  text,
  authorId,
  recipientId,
}: MutationAddMessageArgs): Promise<MessageRes> => {
  return MessageModel.create({
    info: {
      text,
      isRead: false,
    },
    users: {
      authorId,
      recipientId,
    },
    visible: {
      isVisibleAuthor: true,
      isVisibleAll: true,
    },
    editAt: null,
    deleteAt: null,
  });
};
