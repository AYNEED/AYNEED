import { Resolvers } from 'src/__generated__';
import { ValidationError } from 'shared';
import { createMessage } from 'src/helpers/messages';
import { findUserById } from 'src/helpers/users';

export const addMessage: Resolvers['Mutation']['addMessage'] = async (
  parent,
  { text, authorId, recipientId }
) => {
  const recipient = await findUserById(recipientId);
  const author = await findUserById(authorId);

  if (
    recipient.statistics.completeness !== 100 &&
    author.statistics.completeness !== 100
  ) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  //TODO: add exception (support chat)

  if (!text) {
    throw new ValidationError('error.message.empty');
  }

  return createMessage({ text, authorId, recipientId });
};
