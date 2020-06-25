import { Resolvers } from 'src/__generated__';
import { signInEmail, signUpEmail } from 'src/resolvers/mutations/users';

export const mutation: Resolvers['Mutation'] = {
  signInEmail,
  signUpEmail,
};
