import { MessageRes, MessageModel } from 'src/models/message';
import { MutationMessageAddArgs } from 'src/__generated__';
import { WithSenderId } from 'src/types';

export const createMessage = async ({
  text,
  senderId,
  targetId,
}: WithSenderId<MutationMessageAddArgs>): Promise<MessageRes> =>
  MessageModel.create({
    senderId,
    targetId,
    info: {
      text,
      isRead: false,
    },
    visible: {
      isVisibleSender: true,
      isVisibleAll: true,
    },
    editAt: null,
    deleteAt: null,
  });
