import { Resolvers } from 'src/__generated__';
import { findUserById } from 'src/helpers/users';
import { createSubscriptionUser } from 'src/helpers/subscriptions';
import { ValidationError } from 'shared';

export const subscriptionToUserAdd: Resolvers['Mutation']['subscriptionToUserAdd'] = async (
  parent,
  { targetId },
  { user }
) => {
  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  await findUserById(targetId);

  if (user.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  return await createSubscriptionUser({
    senderId: user.id,
    targetId,
  });
};

export const subscriptionToUserRemove: Resolvers['Mutation']['subscriptionToUserRemove'] = async (
  parent,
  { id }
) => {
  // TODO: remove subscription from db
  return true;
};
