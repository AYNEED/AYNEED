import { Resolvers, SubscriptionTargetModel } from 'src/generated';
import { findUserById } from 'src/helpers/users';
import { SubscriptionModel } from 'src/models/subscription';
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
    throw new ValidationError('error.subscription.myself');
  }

  const check = await SubscriptionModel.exists({
    senderId: user.id,
    targetId,
    targetModel,
  });

  if (check) {
    throw new ValidationError('error.subscription.exists');
  }

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
