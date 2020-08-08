import { Resolvers } from 'src/__generated__';
import { ValidationError } from 'shared';
import { createLike } from 'src/helpers/likes';
import { findUserById } from 'src/helpers/users';

export const likeAdd: Resolvers['Mutation']['likeAdd'] = async (
  parent,
  { targetId, targetModel, status },
  { user }
) => {
  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  if (user.id === targetId) {
    // TODO: throw exception
  }

  // TODO: if like already exists, throw exception

  const target = await findUserById(targetId);

  if (
    user.statistics.completeness !== 100 &&
    target.statistics.completeness !== 100
  ) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  return createLike({ senderId: user.id, targetId, targetModel, status });
};

export const likeRemove: Resolvers['Mutation']['likeRemove'] = async (
  parent,
  { id }
) => {
  // TODO: remove like from db
  return true;
};
