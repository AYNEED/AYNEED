import { Resolvers } from 'src/_generated';

export const resolveUser: Resolvers['User'] = {
  id: (parent) => parent.id,
  isOnline: (parent) => parent.isOnline,
  personal: (parent) => parent.personal,
};

export const resolveUserPersonalData: Resolvers['UserPersonalData'] = {
  login: (parent) => parent.login,
  firstName: (parent) => parent.firstName,
  lastName: (parent) => parent.lastName,
  gender: (parent) => parent.gender,
};
