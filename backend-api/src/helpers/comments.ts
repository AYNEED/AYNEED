import { CommentRes, CommentModel } from 'src/models/comment';
import { MutationCommentAddArgs, Comment } from 'src/__generated__';
import { ValidationError } from 'shared';
import { WithSenderId } from 'src/types';

export const findCommentById = async (
  id: Comment['id']
): Promise<CommentRes> => {
  const comment = await CommentModel.findById(id);

  if (!comment) {
    throw new ValidationError('error.comment.notFound');
  }

  return comment;
};

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
