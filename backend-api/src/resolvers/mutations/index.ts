import { Resolvers } from 'src/_generated';
import { signInEmail, signUpEmail } from 'src/resolvers/mutations/users';

export const mutation: Resolvers['Mutation'] = {
  signInEmail,
  signUpEmail,
};
