import { Resolvers } from 'src/__generated__';

export const resolveUser: Resolvers['User'] = {
  id: (parent) => parent.id,
  isOnline: (parent) => parent.isOnline,
  about: (parent) => parent.about,
  personal: (parent) => parent.personal,
  regional: (parent) => parent.regional,
  contacts: (parent) => parent.contacts,
  statistics: (parent) => parent.statistics,
  createdAt: (parent) => parent.createdAt,
};

export const resolveUserAboutData: Resolvers['UserAboutData'] = {
  bio: (parent) => parent.bio,
  career: (parent) => parent.career,
  skills: (parent) => parent.skills,
  education: (parent) => parent.education,
};

export const resolveUserPersonalData: Resolvers['UserPersonalData'] = {
  firstName: (parent) => parent.firstName,
  lastName: (parent) => parent.lastName,
  isAgree: (parent) => parent.isAgree,
  bornAt: (parent) => parent.bornAt,
  photo: (parent) => parent.photo,
};

export const resolveUserRegionalData: Resolvers['UserRegionalData'] = {
  city: (parent) => parent.city,
  state: (parent) => parent.state,
  country: (parent) => parent.country,
  locale: (parent) => parent.locale,
  languages: (parent) => parent.languages,
};

export const resolveUserContactsData: Resolvers['UserContactsData'] = {
  email: (parent) => parent.email,
  phone: (parent) => parent.phone,
  vkontakte: (parent) => parent.vkontakte,
  facebook: (parent) => parent.facebook,
  instagram: (parent) => parent.instagram,
  telegram: (parent) => parent.telegram,
  linkedin: (parent) => parent.linkedin,
};

export const resolveUserStatisticsData: Resolvers['UserStatisticsData'] = {
  completeness: (parent) => parent.completeness,
};

export const resolveUserCareerRecord: Resolvers['UserCareerRecord'] = {
  title: (parent) => parent.title,
  description: (parent) => parent.description,
};

export const resolveUserSkillRecord: Resolvers['UserSkillRecord'] = {
  title: (parent) => parent.title,
  primary: (parent) => parent.primary,
};

export const resolveUserEducationRecord: Resolvers['UserEducationRecord'] = {
  title: (parent) => parent.title,
  description: (parent) => parent.description,
};

export const resolveUserLanguageRecord: Resolvers['UserLanguageRecord'] = {
  code: (parent) => parent.code,
  level: (parent) => parent.level,
};

export const resolveUserContactRecord: Resolvers['UserContactRecord'] = {
  value: (parent) => parent.value,
  isVisible: (parent) => parent.isVisible,
  isVerified: (parent) => parent.isVerified,
};
