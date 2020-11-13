import { Query } from 'src/generated/state';

export const isLoggedInResolver = {
  read(isLoggedIn: Query['isLoggedIn']): Query['isLoggedIn'] {
    return isLoggedIn;
  },
  merge(isLoggedIn: Query['isLoggedIn']): Query['isLoggedIn'] {
    return isLoggedIn;
  },
};

export const userResolver = {
  read(user: Query['user']): Query['user'] {
    return user;
  },
  merge(user: Query['user']): Query['user'] {
    return user;
  },
};
