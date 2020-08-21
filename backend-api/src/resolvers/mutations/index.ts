import { Resolvers } from 'src/__generated__';
import { helpAdd, helpItemAdd } from 'src/resolvers/mutations/helps';
import { commentAdd, commentRemove } from 'src/resolvers/mutations/comments';
import { likeAdd, likeRemove } from 'src/resolvers/mutations/likes';
import { messageAdd } from 'src/resolvers/mutations/messages';
import { projectAdd, projectRemove } from 'src/resolvers/mutations/projects';
import {
  subscriptionAdd,
  subscriptionRemove,
} from 'src/resolvers/mutations/subscriptions';
import {
  forgotPassword,
  forgotPasswordChange,
  signInEmail,
  signUpEmail,
  signOut,
} from 'src/resolvers/mutations/users';

export const mutation: Resolvers['Mutation'] = {
  helpAdd,
  helpItemAdd,
  forgotPassword,
  forgotPasswordChange,
  signInEmail,
  signUpEmail,
  signOut,
  commentAdd,
  commentRemove,
  likeAdd,
  likeRemove,
  messageAdd,
  projectAdd,
  projectRemove,
  subscriptionAdd,
  subscriptionRemove,
};
