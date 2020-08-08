import {
  SubscriptionUserRes,
  SubscriptionUserModel,
} from 'src/models/subscriptionUser';
import {
  SubscriptionProjectRes,
  SubscriptionProjectModel,
} from 'src/models/subscriptionProject';
import {
  SubscriptionUser,
  MutationAddSubscriptionUserArgs,
  SubscriptionProject,
  MutationAddSubscriptionProjectArgs,
} from 'src/__generated__';
import { ValidationError } from 'shared';

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
  recipientId,
  status,
}: MutationAddSubscriptionUserArgs): Promise<SubscriptionUserRes> =>
  SubscriptionUserModel.create({
    senderId,
    recipientId,
    status,
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
