import { CommentRes, CommentModel } from 'src/models/comment';
import { MutationCommentAddArgs } from 'src/__generated__';
import { WithSenderId } from 'src/types';

export const createComment = async ({
  commentId,
  senderId,
  targetId,
  targetModel,
  content,
}: WithSenderId<MutationCommentAddArgs>): Promise<CommentRes> =>
  CommentModel.create({
    commentId,
    senderId,
    targetId,
    targetModel,
    content,
    likeCount: 0,
    dislikeCount: 0,
    commentCount: 0,
  });
