import { Resolvers } from 'src/__generated__';
import { ValidationError } from 'shared';
import { createMessage } from 'src/helpers/messages';
import { findUserById } from 'src/helpers/users';

export const addMessage: Resolvers['Mutation']['addMessage'] = async (
  parent,
  { text, senderId, targetId }
) => {
  const recipient = await findUserById(targetId);
  const author = await findUserById(senderId);

  // TODO: exclude these checks for messages to the support
  if (
    recipient.statistics.completeness !== 100 &&
    author.statistics.completeness !== 100
  ) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  if (!text) {
    throw new ValidationError('error.message.empty');
  }

  return createMessage({ text, senderId, targetId });
};
