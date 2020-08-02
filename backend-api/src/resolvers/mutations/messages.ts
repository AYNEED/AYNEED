import { Resolvers } from 'src/__generated__';
import { ValidationError } from 'shared';
import { createMessage } from 'src/helpers/messages';
import { findUserById } from 'src/helpers/users';

export const addMessage: Resolvers['Mutation']['addMessage'] = async (
  parent,
  { text, authorId, recipientId }
) => {
  findUserById(recipientId);

  if (!text) {
    throw new ValidationError('error.message.empty');
  }

  return createMessage({ text, authorId, recipientId });
};
