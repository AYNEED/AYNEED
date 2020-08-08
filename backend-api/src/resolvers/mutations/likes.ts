import { Resolvers } from 'src/__generated__';
import { ValidationError } from 'shared';
import { createLike } from 'src/helpers/likes';
import { findUserById, findSenderIdByToken } from 'src/helpers/users';

export const likeAdd: Resolvers['Mutation']['likeAdd'] = async (
  parent,
  { token, targetId, targetModel, status }
) => {
  const senderId = await findSenderIdByToken(token);

  const sender = await findUserById(senderId);
  const target = await findUserById(targetId);

  if (
    sender.statistics.completeness !== 100 &&
    target.statistics.completeness !== 100
  ) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  return createLike({ senderId, targetId, targetModel, status });
};

export const likeRemove: Resolvers['Mutation']['likeRemove'] = async (
  parent,
  { token, id }
) => {
  // TODO: remove like from db
  return true;
};
