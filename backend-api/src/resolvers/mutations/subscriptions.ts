import { Resolvers } from 'src/__generated__';
import { findUserById, findSenderIdByToken } from 'src/helpers/users';
import { createSubscriptionUser } from 'src/helpers/subscriptions';
import { ValidationError } from 'shared';

export const subscriptionToUserAdd: Resolvers['Mutation']['subscriptionToUserAdd'] = async (
  parent,
  { token, targetId }
) => {
  await findUserById(targetId);
  const senderId = await findSenderIdByToken(token);
  const sender = await findUserById(senderId);

  if (sender.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  return await createSubscriptionUser({
    senderId,
    targetId,
  });
};

export const subscriptionToUserRemove: Resolvers['Mutation']['subscriptionToUserRemove'] = async (
  parent,
  { token, id }
) => {
  // TODO: remove subscription from db
  return true;
};
