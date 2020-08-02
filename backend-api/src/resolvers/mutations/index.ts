import { Resolvers } from 'src/__generated__';
import {
  forgotPassword,
  forgotPasswordChange,
  signInEmail,
  signUpEmail,
} from 'src/resolvers/mutations/users';

import { addBeginning } from 'src/resolvers/mutations/beginnings';

export const mutation: Resolvers['Mutation'] = {
  forgotPassword,
  forgotPasswordChange,
  signInEmail,
  signUpEmail,
  addBeginning,
};
