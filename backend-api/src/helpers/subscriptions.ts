import {
  SubscriptionUserRes,
  SubscriptionUserModel,
} from 'src/models/subscriptionUser';
import {
  SubscriptionUser,
  SubscriptionStatus,
  MutationSubscriptionToUserAddArgs,
} from 'src/__generated__';
import { ValidationError } from 'shared';
import { WithSenderId } from 'src/types';

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
  targetId,
}: WithSenderId<MutationSubscriptionToUserAddArgs>): Promise<
  SubscriptionUserRes
> =>
  SubscriptionUserModel.create({
    senderId,
    targetId,
    status: SubscriptionStatus.Waiting,
  });
