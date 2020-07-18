import { Schema, model, Document } from 'mongoose';

import { schemaOptions } from 'src/utils/mongodb';
import {
  Maybe,
  Locale,
  LanguageLevel,
  User,
  UserSkillRecord,
  UserCareerRecord,
  UserEducationRecord,
  UserLanguageRecord,
  UserContactRecord,
} from 'src/__generated__';

export type UserPassword = {
  hash: string;
  salt: string;
};

export type UserRecovery = {
  date: string;
  code: string;
};

export type UserRes = Document &
  Omit<User, 'isOnline'> & {
    private: {
      password: UserPassword;
      recovery: Maybe<UserRecovery>;
    };
  };

export type UserComplete = Omit<
  User,
  'id' | 'network' | 'statistics' | 'createdAt'
>;

type UserReq = Omit<UserRes, 'createdAt'>;

const UserSkillSchema = new Schema<UserSkillRecord>({
  title: {
    type: String,
    required: true,
  },
  primary: {
    type: Boolean,
    required: true,
  },
});

const UserCareerSchema = new Schema<UserCareerRecord>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const UserEducationSchema = new Schema<UserEducationRecord>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const UserLanguageSchema = new Schema<UserLanguageRecord>({
  code: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    enum: Object.values(LanguageLevel),
    required: true,
  },
});

const UserContactSchema = new Schema<UserContactRecord>({
  value: {
    type: String,
    unique: true,
    sparse: true,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

const UserRecoverySchema = new Schema<UserContactRecord>({
  date: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    unique: true,
    sparse: true,
    required: true,
  },
});

const UserSchema = new Schema<UserReq>(
  {
    about: {
      bio: {
        type: String,
      },
      skills: {
        type: [UserSkillSchema],
      },
      career: {
        type: [UserCareerSchema],
      },
      education: {
        type: [UserEducationSchema],
      },
    },
    personal: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
      isAgree: {
        type: Boolean,
        required: true,
      },
      bornAt: {
        type: Date,
      },
      photo: {
        type: [String],
      },
    },
    regional: {
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      country: {
        type: String,
      },
      locale: {
        type: String,
        enum: Object.values(Locale),
        required: true,
      },
      languages: {
        type: [UserLanguageSchema],
      },
    },
    contacts: {
      email: {
        type: UserContactSchema,
        required: true,
      },
      phone: {
        type: UserContactSchema,
      },
      vkontakte: {
        type: UserContactSchema,
      },
      facebook: {
        type: UserContactSchema,
      },
      instagram: {
        type: UserContactSchema,
      },
      telegram: {
        type: UserContactSchema,
      },
      linkedin: {
        type: UserContactSchema,
      },
    },
    statistics: {
      completeness: {
        type: Number,
        required: true,
      },
    },
    private: {
      password: {
        hash: {
          type: String,
          required: true,
        },
        salt: {
          type: String,
          required: true,
        },
      },
      recovery: {
        type: UserRecoverySchema,
      },
    },
  },
  schemaOptions
);

export const UserModel = model<UserReq, UserRes>('User', UserSchema);
