import {
  SubscriptionUserRes,
  SubscriptionUserModel,
} from 'src/models/subscriptionUser';
import {
  SubscriptionProjectRes,
  SubscriptionProjectModel,
} from 'src/models/subscriptionProject';
import {
  SubscriptionProject,
  SubscriptionUser,
  SubscriptionStatus,
  MutationSubscriptionToUserAddArgs,
  MutationAddSubscriptionProjectArgs,
} from 'src/__generated__';
import { ValidationError } from 'shared';
import { WithSenderId } from 'src/types';

export const findSubscriptionUserById = async (
  id: SubscriptionUser['id']
): Promise<SubscriptionUserRes> => {
  const subscription = await SubscriptionUserModel.findById(id);

  if (!subscription) {
    throw new ValidationError('error.subscription.user.notFound');
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

export const findSubscriptionProjectById = async (
  id: SubscriptionProject['id']
): Promise<SubscriptionProjectRes> => {
  const subscription = await SubscriptionProjectModel.findById(id);

  if (!subscription) {
    throw new ValidationError('error.subscription.project.notFound');
  }

  return subscription;
};

export const createSubscriptionProject = async ({
  owner,
  targetId,
  status,
}: MutationAddSubscriptionProjectArgs): Promise<SubscriptionProjectRes> =>
  SubscriptionProjectModel.create({
    owner,
    targetId,
    status,
  });
