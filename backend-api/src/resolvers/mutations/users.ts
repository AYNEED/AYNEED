import { Resolvers, User } from 'src/__generated__';
import { users } from 'src/resolvers/mockData';
import { events, pubsub } from 'src/resolvers/subscriptions';
import { UserModel } from 'src/models/user';

// TODO: use mongoDB (ch274)
export const signInEmail: Resolvers['Mutation']['signInEmail'] = (
  parent,
  { email, password }
) => {
  const data = users.find((user) => user.personal.firstName === email);

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

export const signUpEmail: Resolvers['Mutation']['signUpEmail'] = async (
  parent,
  { email, password, firstName, lastName, locale, userAgreement }
) => {
  const { id, personal } = await UserModel.create({
    personal: {
      firstName,
      lastName,
    },
  });

  const user: User = {
    id,
    isOnline: true,
    personal,
  }

  users.push(user);
  pubsub.publish(events.user.added, user);

  return user;
};
