import { Resolvers } from 'src/__generated__';
import { createComment } from 'src/helpers/comments';
import { ValidationError } from 'shared';

export const commentAdd: Resolvers['Mutation']['commentAdd'] = async (
  parent,
  { parentId, targetId, targetModel, text },
  { user }
) => {
  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  return createComment({
    senderId: user.id,
    parentId,
    targetId,
    targetModel,
    text,
  });
};
