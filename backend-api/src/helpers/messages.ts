import { MessageRes, MessageModel, MessageComplete } from 'src/models/message';
import { MutationAddMessageArgs } from 'src/__generated__';

export const createMessage = async ({
  text,
  authorId,
  recipientId,
}: MutationAddMessageArgs): Promise<MessageRes> => {
  const messageComplete: MessageComplete = {
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
  };

  return MessageModel.create({ ...messageComplete });
};
