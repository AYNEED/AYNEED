import { Resolvers } from 'src/__generated__';
import {
  forgotPassword,
  forgotPasswordChange,
  signInEmail,
  signUpEmail,
} from 'src/resolvers/mutations/users';

import { addLike } from 'src/resolvers/mutations/likes';
import { addMessage } from 'src/resolvers/mutations/messages';
import { addSubscriptionUser } from 'src/resolvers/mutations/subscriptions';
import { addBeginning } from 'src/resolvers/mutations/beginnings';

export const mutation: Resolvers['Mutation'] = {
  forgotPassword,
  forgotPasswordChange,
  signInEmail,
  signUpEmail,
  addBeginning,
  addSubscriptionUser,
  addMessage,
  addLike,
};
