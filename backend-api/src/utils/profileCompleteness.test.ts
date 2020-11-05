import { profileCompleteness } from 'src/utils/profileCompleteness';
import { UserComplete } from 'src/models/user';
import { UserLocale, UserRole } from 'src/generated';

const exUser: UserComplete = {
  role: UserRole.User,
  about: {
    bio: null,
    skills: [],
    career: [],
    education: [],
  },
  personal: {
    firstName: 'Jon',
    lastName: 'Doe',
    isAgree: true,
    bornAt: null,
    photo: [],
  },
  regional: {
    city: null,
    state: null,
    country: null,
    locale: UserLocale.Rus,
    languages: [],
  },
  contacts: {
    email: {
      value: 'test@example.com',
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
  test('check 3/7 completeness - 0%', () => {
    expect(profileCompleteness(exUser)).toEqual(43);
  });

  test('check 4/7 completeness - 25%', () => {
    const user = {
      ...exUser,
      contacts: {
        ...exUser.contacts,
        phone: {
          isVisible: false,
          isVerified: true,
          value: '+79001112233',
        },
      },
    };

    expect(profileCompleteness(user)).toEqual(57);
  });

  test('check 5/7 completeness - 50%', () => {
    const user = {
      ...exUser,
      contacts: {
        ...exUser.contacts,
        phone: {
          isVisible: false,
          isVerified: true,
          value: '+79001112233',
        },
      },
      regional: {
        ...exUser.regional,
        country: 'Russia',
      },
    };

    expect(profileCompleteness(user)).toEqual(71);
  });

  test('check 6/7 completeness - 75%', () => {
    const user = {
      ...exUser,
      contacts: {
        ...exUser.contacts,
        phone: {
          isVisible: false,
          isVerified: true,
          value: '+79001112233',
        },
      },
      regional: {
        ...exUser.regional,
        country: 'Russia',
        city: 'Novosibirsk',
      },
    };

    expect(profileCompleteness(user)).toEqual(86);
  });

  test('check 7/7 completeness - 100%', () => {
    const user = {
      ...exUser,
      contacts: {
        ...exUser.contacts,
        phone: {
          isVisible: false,
          isVerified: true,
          value: '+79001112233',
        },
      },
      regional: {
        ...exUser.regional,
        country: 'Russia',
        city: 'Novosibirsk',
      },
      personal: {
        ...exUser.personal,
        bornAt: '16.05.1994',
      },
    };

    expect(profileCompleteness(user)).toEqual(100);
  });
});
