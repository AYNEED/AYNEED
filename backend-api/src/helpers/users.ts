import { UserRes, UserComplete, UserModel } from 'src/models/user';
import { createPasswordHash, createRandomString } from 'src/utils/password';
import { profileCompleteness } from 'src/utils/profileCompleteness';
import { MutationSignUpEmailArgs, User, UserRole } from 'src/__generated__';
import { ValidationError } from 'shared';

export const createUser = async ({
  email,
  password,
  firstName,
  lastName,
  locale,
  isAgree,
}: Omit<MutationSignUpEmailArgs, 'client'>): Promise<UserRes> => {
  const salt = createRandomString();
  const hash = createPasswordHash(password, salt);

  const userComplete: UserComplete = {
    role: UserRole.User,
    about: {
      bio: null,
      skills: [],
      career: [],
      education: [],
    },
    personal: {
      firstName,
      lastName,
      isAgree,
      bornAt: null,
      photo: [],
    },
    regional: {
      city: null,
      state: null,
      country: null,
      locale,
      languages: [],
    },
    contacts: {
      email: {
        value: email,
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

  return UserModel.create({
    ...userComplete,
    statistics: {
      completeness: profileCompleteness(userComplete),
    },
    private: {
      password: {
        hash,
        salt,
      },
      recovery: null,
      tokens: {
        access: '',
        refresh: '',
      },
    },
  });
};

export const findUserByToken = async (
  token: string
): Promise<UserRes | null> => {
  const data = await UserModel.findOne({
    'private.tokens.access': token,
  });
  return data;
};

export const findUserById = async (id: User['id']): Promise<UserRes> => {
  const user = await UserModel.findById(id);

  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  return user;
};

export const updateUser = async (
  id: User['id'],
  fields: Partial<UserRes>
): Promise<UserRes> => {
  const {
    about,
    personal,
    regional,
    contacts,
    statistics,
    role,
    createdAt,
  } = await findUserById(id);

  const newUser = {
    about,
    personal,
    regional,
    contacts,
    statistics,
    role,
    createdAt,
    ...fields,
  };

  const user = await UserModel.findOneAndUpdate(
    { _id: id },
    {
      ...newUser,
      statistics: {
        completeness: profileCompleteness(newUser),
      },
    }
  );

  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  return user;
};
