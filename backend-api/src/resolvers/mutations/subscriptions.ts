import { Resolvers } from 'src/__generated__';
import { findUserById } from 'src/helpers/users';
import {
  createSubscriptionUser,
  createSubscriptionProject,
} from 'src/helpers/subscriptions';
import { ValidationError } from 'shared';

export const addSubscriptionUser: Resolvers['Mutation']['addSubscriptionUser'] = async (
  parent,
  { senderId, recipientId, status }
) => {
  await findUserById(recipientId);
  const sender = await findUserById(senderId);

  if (sender.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  return await createSubscriptionUser({
    senderId,
    recipientId,
    status,
  });
};

export const addSubscriptionProject: Resolvers['Mutation']['addSubscriptionProject'] = async (
  parent,
  { owner, targetId, status }
) => {
  const user = await findUserById(owner);

  if (user.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  return await createSubscriptionProject({
    owner,
    targetId,
    status,
  });
};
