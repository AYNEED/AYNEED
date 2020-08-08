import { Resolvers } from 'src/__generated__';
import {
  forgotPassword,
  forgotPasswordChange,
  signInEmail,
  signUpEmail,
} from 'src/resolvers/mutations/users';

import { addLike } from 'src/resolvers/mutations/likes';
import { addMessage } from 'src/resolvers/mutations/messages';
import { addProject } from 'src/resolvers/mutations/projects';
import {
  addSubscriptionUser,
  addSubscriptionProject,
} from 'src/resolvers/mutations/subscriptions';

export const mutation: Resolvers['Mutation'] = {
  forgotPassword,
  forgotPasswordChange,
  signInEmail,
  signUpEmail,
  addProject,
  addSubscriptionProject,
  addSubscriptionUser,
  addMessage,
  addLike,
};
