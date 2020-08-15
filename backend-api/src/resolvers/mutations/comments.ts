import { Resolvers } from 'src/__generated__';
import { createComment } from 'src/helpers/comments';

export const commentAdd: Resolvers['Mutation']['commentAdd'] = async (
  parent,
  {
    commentId,
    senderId,
    targetId,
    targetModel,
    content,
    likeCount,
    dislikeCount,
    commentCount,
  }
) => {
  const comment = await createComment({
    commentId,
    senderId,
    targetId,
    targetModel,
    content,
    likeCount,
    dislikeCount,
    commentCount,
  });

  return comment;
};
