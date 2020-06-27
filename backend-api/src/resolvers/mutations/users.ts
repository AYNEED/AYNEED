import { Resolvers, User } from 'src/__generated__';
import { events, pubsub } from 'src/resolvers/subscriptions';
import { UserModel } from 'src/models/user';

export const signInEmail: Resolvers['Mutation']['signInEmail'] = async (
  parent,
  { email, password }
) => {
  const data = await UserModel.findOne({
    'personal.firstName': email,
  });

  if (!data) {
    return null;
  }

  const { id, personal, createdAt } = data;

  const user: User = {
    id,
    personal,
    createdAt,
    isOnline: true,
  };

  pubsub.publish(events.user.updated, user);

  return user;
};

export const signUpEmail: Resolvers['Mutation']['signUpEmail'] = async (
  parent,
  { email, password, firstName, lastName, locale, userAgreement }
) => {
  const { id, personal, createdAt } = await UserModel.create({
    personal: {
      firstName,
      lastName,
    },
  });

  const user: User = {
    id,
    isOnline: true,
    personal,
    createdAt,
  };

  pubsub.publish(events.user.added, user);

  return user;
};
