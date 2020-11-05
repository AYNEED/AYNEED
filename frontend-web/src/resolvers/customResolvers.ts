import { Query } from 'src/generated/state';

export const isLoggedInResolver = {
  read(isLoggedIn: Query['isLoggedIn']): Query['isLoggedIn'] {
    console.log('read');
    return isLoggedIn;
  },
  merge(isLoggedIn: Query['isLoggedIn']): Query['isLoggedIn'] {
    console.log('write');
    return isLoggedIn;
  },
};
