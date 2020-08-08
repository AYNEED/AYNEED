import { Resolvers } from 'src/__generated__';
import { ValidationError } from 'shared';
import { createLike } from 'src/helpers/likes';
import { findUserById } from 'src/helpers/users';

export const addLike: Resolvers['Mutation']['addLike'] = async (
  parent,
  { senderId, targetId, targetType, statement }
) => {
  const recipient = await findUserById(senderId);
  const author = await findUserById(targetId);

  if (
    recipient.statistics.completeness !== 100 &&
    author.statistics.completeness !== 100
  ) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  return createLike({ senderId, targetId, targetType, statement });
};
