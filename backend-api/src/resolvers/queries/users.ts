import { Resolvers } from 'src/__generated__';
import { UserModel } from 'src/models/user';

export const getUserById: Resolvers['Query']['user'] = async (
  parent,
  query
) => {
  const user = await UserModel.findById(query.id);

  if (!user) {
    return null;
  }

  const { id, personal, createdAt } = user;

  return {
    id,
    personal,
    createdAt,
    isOnline: false,
  };
};

export const getUsers: Resolvers['Query']['users'] = async () => {
  const users = await UserModel.find();

  return users.map(({ id, personal, createdAt }) => ({
    id,
    personal,
    createdAt,
    isOnline: false,
  }));
};
