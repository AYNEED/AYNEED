import { UserRes, UserComplete, UserModel, UserToken } from 'src/models/user';
import { createPasswordHash, createRandomString } from 'src/utils/password';
import { profileCompleteness } from 'src/utils/profileCompleteness';
import { MutationSignUpEmailArgs, User, UserRole } from 'src/generated';
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
      token: {
        access: '',
        refresh: '',
      },
      recovery: null,
    },
  });
};

export const findUserByToken = async (
  token: UserToken
): Promise<UserRes | null> => await UserModel.findOne({ private: { token } });

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

export const updateUserToken = async (
  id: User['id'],
  token: UserToken
): Promise<UserRes> => {
  const {
    private: { password },
  } = await findUserById(id);

  const user = await UserModel.findOneAndUpdate(
    { _id: id },
    { private: { password, token, recovery: null } }
  );

  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  return user;
};
