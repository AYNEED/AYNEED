import { Resolvers } from 'src/__generated__';
import { findUserById } from 'src/helpers/users';
import { createSubscriptionUser } from 'src/helpers/subscriptions';
import { ValidationError } from 'shared';

export const addSubscriptionUser: Resolvers['Mutation']['addSubscriptionUser'] = async (
  parent,
  { senderId, targetId, status }
) => {
  await findUserById(targetId);
  const sender = await findUserById(senderId);

  if (sender.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  return await createSubscriptionUser({
    senderId,
    targetId,
    status,
  });
};
