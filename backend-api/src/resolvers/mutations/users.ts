import { Resolvers, User } from 'src/_generated';
import { users } from 'src/resolvers/mockData';
import { events, pubsub } from 'src/resolvers/subscriptions';

// TODO: use mongoDB (ch274)
export const signInEmail: Resolvers['Mutation']['signInEmail'] = (
  parent,
  { email, password }
) => {
  const data = users.find((user) => user.personal.login === email);

  if (!data) {
    return null;
  }

  const user: User = {
    ...data,
    isOnline: true,
  };

  pubsub.publish(events.user.updated, user);

  return user;
};

export const signUpEmail: Resolvers['Mutation']['signUpEmail'] = (
  parent,
  { email, password, firstName, lastName, locale, userAgreement }
) => {
  const id = users.length + 1;

  const user: User = {
    id: 'user' + id,
    isOnline: true,
    personal: {
      login: 'user' + id,
      firstName,
      lastName,
      gender: null,
    },
  };

  users.push(user);
  pubsub.publish(events.user.added, user);

  return user;
};
