import { profileCompleteness } from 'src/utils/profileCompleteness';
import { UserComplete } from 'src/models/user';
import { Locale } from 'src/__generated__';

const exUser: UserComplete = {
  about: {
    bio: null,
    skills: [],
    career: [],
    education: [],
  },
  personal: {
    firstName: 'Andrey',
    lastName: 'Dudnik',
    isAgree: true,
    bornAt: null,
    photo: [],
  },
  regional: {
    city: 'Novosibirsk',
    state: null,
    country: 'Russia',
    locale: Locale.Rus,
    languages: [],
  },
  contacts: {
    email: {
      value: '7reyddk@gmail.com',
      isVisible: false,
      isVerified: false,
    },
    phone: null,
    vkontakte: null,
    facebook: null,
    instagram: null,
    telegram: null,
    linkedin: null,
  },
};

describe('Use profile completeness function', () => {
  test('expected number', () => {
    expect(profileCompleteness(exUser)).toEqual(expect.any(Number));
  });
});
