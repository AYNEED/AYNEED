import {
  SubscriptionUserRes,
  SubscriptionUserModel,
} from 'src/models/subscriptionUser';
import {
  SubscriptionUser,
  MutationAddSubscriptionUserArgs,
} from 'src/__generated__';
import { ValidationError } from 'shared';

export const findSubscriptionUserById = async (
  id: SubscriptionUser['id']
): Promise<SubscriptionUserRes> => {
  const subscription = await SubscriptionUserModel.findById(id);

  if (!subscription) {
    throw new ValidationError('error.subscription.notFound');
  }

  return subscription;
};

export const createSubscriptionUser = async ({
  senderId,
  recipientId,
  status,
}: MutationAddSubscriptionUserArgs): Promise<SubscriptionUserRes> =>
  SubscriptionUserModel.create({
    senderId,
    recipientId,
    status,
  });
