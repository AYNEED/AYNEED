import { Resolvers } from 'src/__generated__';
import { ValidationError } from 'shared';
import { createMessage } from 'src/helpers/messages';
import { findUserById } from 'src/helpers/users';

export const messageAdd: Resolvers['Mutation']['messageAdd'] = async (
  parent,
  { targetId, text },
  { user }
) => {
  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  const target = await findUserById(targetId);

  // TODO: exclude these checks for messages to the support
  if (
    user.statistics.completeness !== 100 ||
    target.statistics.completeness !== 100
  ) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  if (!text) {
    throw new ValidationError('error.message.empty');
  }

  return createMessage({ text, senderId: user.id, targetId });
};
