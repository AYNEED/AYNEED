import { SubscriptionRes, SubscriptionModel } from 'src/models/subscription';
import {
  SubscribedUser,
  SubscriptionStatus,
  MutationSubscriptionAddArgs,
} from 'src/__generated__';
import { ValidationError } from 'shared';
import { WithSenderId } from 'src/types';

export const findSubscriptionById = async (
  id: SubscribedUser['id']
): Promise<SubscriptionRes> => {
  const subscription = await SubscriptionModel.findById(id);

  if (!subscription) {
    throw new ValidationError('error.subscription.notFound');
  }

  return subscription;
};

export const createSubscription = async ({
  senderId,
  targetId,
  targetModel,
}: WithSenderId<MutationSubscriptionAddArgs>): Promise<SubscriptionRes> =>
  SubscriptionModel.create({
    senderId,
    targetId,
    targetModel,
    status: SubscriptionStatus.Waiting,
  });
