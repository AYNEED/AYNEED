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
    firstName: '',
    lastName: '',
    isAgree: true,
    bornAt: null,
    photo: [],
  },
  regional: {
    city: null,
    state: null,
    country: null,
    locale: Locale.Rus,
    languages: [],
  },
  contacts: {
    email: {
      value: '',
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
  test('check 0/4 completeness - 0%', () => {
    expect(profileCompleteness(exUser)).toEqual(0);
  });

  test('check 1/4 completeness - 25%', () => {
    exUser.contacts.phone = {
      isVisible: false,
      isVerified: true,
      value: '+79001112233',
    };

    expect(profileCompleteness(exUser)).toEqual(25);
  });

  test('check 2/4 completeness - 50%', () => {
    exUser.contacts.phone = {
      isVisible: false,
      isVerified: true,
      value: '+79001112233',
    };

    exUser.regional.country = 'Russia';

    expect(profileCompleteness(exUser)).toEqual(50);
  });

  test('check 3/4 completeness - 75%', () => {
    exUser.contacts.phone = {
      isVisible: false,
      isVerified: true,
      value: '+79001112233',
    };

    exUser.regional.country = 'Russia';
    exUser.regional.city = 'Novosibirsk';

    expect(profileCompleteness(exUser)).toEqual(75);
  });

  test('check 4/4 completeness - 100%', () => {
    exUser.contacts.phone = {
      isVisible: false,
      isVerified: true,
      value: '+79001112233',
    };

    exUser.regional.country = 'Russia';
    exUser.regional.city = 'Novosibirsk';

    exUser.personal.bornAt = '16.05.1994';

    expect(profileCompleteness(exUser)).toEqual(100);
  });
});
