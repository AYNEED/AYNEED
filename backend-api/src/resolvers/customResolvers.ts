import { Resolvers } from 'src/__generated__';

export const resolveUser: Resolvers['User'] = {
  id: (parent) => parent.id,
  isOnline: (parent) => parent.isOnline,
  personal: (parent) => parent.personal,
  createdAt: (parent) => parent.createdAt,
};

export const resolveUserPersonalData: Resolvers['UserPersonalData'] = {
  firstName: (parent) => parent.firstName,
  lastName: (parent) => parent.lastName,
};
