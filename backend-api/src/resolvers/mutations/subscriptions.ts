import { Resolvers } from 'src/__generated__';
import { findUserById } from 'src/helpers/users';
import { createSubscription } from 'src/helpers/subscriptions';
import { ValidationError } from 'shared';

export const subscriptionAdd: Resolvers['Mutation']['subscriptionAdd'] = async (
  parent,
  { targetId, targetModel },
  { user }
) => {
  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  if (user.id === targetId) {
    // TODO: throw exception
  }

  // TODO: if subscription already exists, throw exception

  const target = await findUserById(targetId);

  if (user.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  return await createSubscription({
    senderId: user.id,
    targetId: target.id,
    targetModel,
  });
};

export const subscriptionRemove: Resolvers['Mutation']['subscriptionRemove'] = async (
  parent,
  { id }
) => {
  // TODO: remove subscription from db
  return true;
};
