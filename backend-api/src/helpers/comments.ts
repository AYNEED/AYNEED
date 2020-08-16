import { CommentRes, CommentModel } from 'src/models/comment';
import { MutationCommentAddArgs } from 'src/__generated__';
import { WithSenderId } from 'src/types';

export const createComment = async ({
  parentId,
  senderId,
  targetId,
  targetModel,
  text,
}: WithSenderId<MutationCommentAddArgs>): Promise<CommentRes> =>
  CommentModel.create({
    parentId,
    senderId,
    targetId,
    targetModel,
    text,
    likesCount: 0,
    dislikesCount: 0,
    commentsCount: 0,
  });
