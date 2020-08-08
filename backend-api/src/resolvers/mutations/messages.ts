import { Resolvers } from 'src/__generated__';
import { ValidationError } from 'shared';
import { createMessage } from 'src/helpers/messages';
import { findUserById, findSenderIdByToken } from 'src/helpers/users';

export const messageAdd: Resolvers['Mutation']['messageAdd'] = async (
  parent,
  { token, targetId, text }
) => {
  const senderId = await findSenderIdByToken(token);

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
