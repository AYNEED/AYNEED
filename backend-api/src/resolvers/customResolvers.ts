import { BeginningModel } from 'src/models/beginning';
import { SubscriptionUserModel } from 'src/models/subscriptionUser';
import { Resolvers, StatusStatement } from 'src/__generated__';

export const resolveSubscriptionUser: Resolvers['SubscriptionUser'] = {
  id: (parent) => parent.id,
  senderId: (parent) => parent.senderId,
  recipientId: (parent) => parent.recipientId,
  status: (parent) => parent.status,
  createdAt: (parent) => parent.createdAt,
};

export const resolveFriendsUser: Resolvers['FriendUser'] = {
  id: (parent) => parent.id,
  senderId: (parent) => parent.senderId,
  recipientId: (parent) => parent.recipientId,
  createdAt: (parent) => parent.createdAt,
};

export const resolveBeginning: Resolvers['Beginning'] = {
  id: (parent) => parent.id,
  authorId: (parent) => parent.authorId,
  title: (parent) => parent.title,
  problem: (parent) => parent.problem,
  solution: (parent) => parent.solution,
  createdAt: (parent) => parent.createdAt,
};

export const resolveBeginningFeed: Resolvers['BeginningFeed'] = {
  items: (parent) => parent.items,
  hasMore: (parent) => parent.hasMore,
};

export const resolveMessageFeed: Resolvers['MessageFeed'] = {
  items: (parent) => parent.items,
  hasMore: (parent) => parent.hasMore,
};

export const resolveMessageInfoData: Resolvers['MessageInfoData'] = {
  text: (parent) => parent.text,
  isRead: (parent) => parent.isRead,
};

export const resolveMessageUsersData: Resolvers['MessageUsersData'] = {
  authorId: (parent) => parent.authorId,
  recipientId: (parent) => parent.recipientId,
};

export const resolveMessageVisibleData: Resolvers['MessageVisibleData'] = {
  isVisibleAuthor: (parent) => parent.isVisibleAuthor,
  isVisibleAll: (parent) => parent.isVisibleAll,
};

export const resolveMessage: Resolvers['Message'] = {
  info: (parent) => parent.info,
  users: (parent) => parent.users,
  visible: (parent) => parent.visible,
  createdAt: (parent) => parent.createdAt,
  editAt: (parent) => parent.editAt,
  deleteAt: (parent) => parent.deleteAt,
};

export const resolveUser: Resolvers['User'] = {
  id: (parent) => parent.id,
  network: (parent) => parent.network,
  about: (parent) => parent.about,
  personal: (parent) => parent.personal,
  regional: (parent) => parent.regional,
  contacts: (parent) => parent.contacts,
  statistics: (parent) => parent.statistics,
  role: (parent) => parent.role,
  createdAt: (parent) => parent.createdAt,

  beginnings: async (parent) => BeginningModel.find({ authorId: parent.id }),
  subscriptions: async (parent) =>
    SubscriptionUserModel.find({
      senderId: parent.id,
      status: { $in: [StatusStatement.Waiting, StatusStatement.Rejected] },
    }),
  friends: async (parent) =>
    SubscriptionUserModel.find({
      senderId: parent.id,
      status: { $in: [StatusStatement.Accepted] },
    }),
};

export const resolveUserFeed: Resolvers['UserFeed'] = {
  items: (parent) => parent.items,
  hasMore: (parent) => parent.hasMore,
};

export const resolveUserAboutData: Resolvers['UserAboutData'] = {
  bio: (parent) => parent.bio,
  career: (parent) => parent.career,
  skills: (parent) => parent.skills,
  education: (parent) => parent.education,
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

export const resolveUserNetworkData: Resolvers['UserNetwotkData'] = {
  isOnline: (parent) => parent.isOnline,
  client: (parent) => parent.client,
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

export const resolveUserStatisticsData: Resolvers['UserStatisticsData'] = {
  completeness: (parent) => parent.completeness,
};

export const resolveUserCareerRecord: Resolvers['UserCareerRecord'] = {
  title: (parent) => parent.title,
  description: (parent) => parent.description,
};

export const resolveUserContactRecord: Resolvers['UserContactRecord'] = {
  value: (parent) => parent.value,
  isVisible: (parent) => parent.isVisible,
  isVerified: (parent) => parent.isVerified,
};

export const resolveUserEducationRecord: Resolvers['UserEducationRecord'] = {
  title: (parent) => parent.title,
  description: (parent) => parent.description,
};

export const resolveUserLanguageRecord: Resolvers['UserLanguageRecord'] = {
  code: (parent) => parent.code,
  level: (parent) => parent.level,
};

export const resolveUserSkillRecord: Resolvers['UserSkillRecord'] = {
  title: (parent) => parent.title,
  primary: (parent) => parent.primary,
};
