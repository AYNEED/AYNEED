import { ProjectModel } from 'src/models/project';
import { SubscriptionProjectModel } from 'src/models/subscriptionProject';
import { SubscriptionUserModel } from 'src/models/subscriptionUser';
import { Resolvers, SubscriptionStatus } from 'src/__generated__';

// -------------------------- Feeds ---------------------------

export const resolveMessageFeed: Resolvers['MessageFeed'] = {
  items: (parent) => parent.items,
  hasMore: (parent) => parent.hasMore,
};

export const resolveProjectFeed: Resolvers['ProjectFeed'] = {
  items: (parent) => parent.items,
  hasMore: (parent) => parent.hasMore,
};

export const resolveUserFeed: Resolvers['UserFeed'] = {
  items: (parent) => parent.items,
  hasMore: (parent) => parent.hasMore,
};

// -------------------------- Models --------------------------

export const resolveMessage: Resolvers['Message'] = {
  id: (parent) => parent.id,
  info: (parent) => parent.info,
  users: (parent) => parent.users,
  visible: (parent) => parent.visible,
  createdAt: (parent) => parent.createdAt,
  editAt: (parent) => parent.editAt,
  deleteAt: (parent) => parent.deleteAt,
};

export const resolveProject: Resolvers['Project'] = {
  id: (parent) => parent.id,
  senderId: (parent) => parent.senderId,
  title: (parent) => parent.title,
  problem: (parent) => parent.problem,
  solution: (parent) => parent.solution,
  createdAt: (parent) => parent.createdAt,
  subscriptions: async (parent) =>
    SubscriptionProjectModel.find({ targetId: parent.id }),
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

  projects: async (parent) => ProjectModel.find({ senderId: parent.id }),
  subscriptions: async (parent) =>
    SubscriptionUserModel.find({
      senderId: parent.id,
      status: {
        $in: [SubscriptionStatus.Waiting, SubscriptionStatus.Rejected],
      },
    }),
  subscribers: async (parent) =>
    SubscriptionUserModel.find({
      targetId: parent.id,
      status: {
        $in: [SubscriptionStatus.Waiting, SubscriptionStatus.Rejected],
      },
    }),
  friends: async (parent) =>
    SubscriptionUserModel.find({
      targetId: parent.id,
      status: { $in: [SubscriptionStatus.Accepted] },
    }),
};

// -------------------- Additional models ---------------------

export const resolveFriendsUser: Resolvers['FriendUser'] = {
  id: (parent) => parent.id,
  senderId: (parent) => parent.senderId,
  targetId: (parent) => parent.targetId,
  createdAt: (parent) => parent.createdAt,
};

export const resolveLike: Resolvers['Like'] = {
  id: (parent) => parent.id,
  senderId: (parent) => parent.senderId,
  targetId: (parent) => parent.targetId,
  targetModel: (parent) => parent.targetModel,
  status: (parent) => parent.status,
  createdAt: (parent) => parent.createdAt,
};

export const resolveSubscribersUser: Resolvers['SubscriberUser'] = {
  id: (parent) => parent.id,
  senderId: (parent) => parent.senderId,
  targetId: (parent) => parent.targetId,
  status: (parent) => parent.status,
  createdAt: (parent) => parent.createdAt,
};

export const resolveSubscriptionUser: Resolvers['SubscriptionUser'] = {
  id: (parent) => parent.id,
  senderId: (parent) => parent.senderId,
  targetId: (parent) => parent.targetId,
  status: (parent) => parent.status,
  createdAt: (parent) => parent.createdAt,
};

export const resolveSubscriptionProject: Resolvers['SubscriptionProject'] = {
  id: (parent) => parent.id,
  owner: (parent) => parent.owner,
  targetId: (parent) => parent.targetId,
  status: (parent) => parent.status,
  createdAt: (parent) => parent.createdAt,
};

// ----------------------- Models data ------------------------

export const resolveMessageInfoData: Resolvers['MessageInfoData'] = {
  text: (parent) => parent.text,
  isRead: (parent) => parent.isRead,
};

export const resolveMessageUsersData: Resolvers['MessageUsersData'] = {
  senderId: (parent) => parent.senderId,
  targetId: (parent) => parent.targetId,
};

export const resolveMessageVisibleData: Resolvers['MessageVisibleData'] = {
  isVisibleSender: (parent) => parent.isVisibleSender,
  isVisibleAll: (parent) => parent.isVisibleAll,
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

// ---------------------- Models records ----------------------

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
