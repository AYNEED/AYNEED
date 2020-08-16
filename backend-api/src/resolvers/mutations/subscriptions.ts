import { Resolvers, SubscriptionTargetModel } from 'src/__generated__';
import { findUserById } from 'src/helpers/users';
import { findSubscriptionById } from 'src/helpers/subscriptions';
import { createSubscription } from 'src/helpers/subscriptions';
import { ValidationError } from 'shared';

const targetModelToHelper: {
  [key in SubscriptionTargetModel]: (targetId: string) => any;
} = {
  [SubscriptionTargetModel.User]: findUserById,
  [SubscriptionTargetModel.Project]: findSubscriptionById,
};

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

  const target = await targetModelToHelper[targetModel](targetId);

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
