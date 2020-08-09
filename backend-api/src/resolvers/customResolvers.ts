import { ProjectModel } from 'src/models/project';
import { SubscriptionModel } from 'src/models/subscription';
import {
  Resolvers,
  SubscriptionStatus,
  SubscriptionTargetModel,
} from 'src/__generated__';

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
  status: (parent) => parent.status,
  subscribers: async (parent) =>
    SubscriptionModel.find({
      targetId: parent.id,
      targetModel: SubscriptionTargetModel.Project,
    }),
  createdAt: (parent) => parent.createdAt,
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
  projects: async (parent) => ProjectModel.find({ senderId: parent.id }),
  subscriptions: async (parent) =>
    SubscriptionModel.find({
      senderId: parent.id,
      targetModel: SubscriptionTargetModel.User,
      status: {
        $in: [SubscriptionStatus.Waiting, SubscriptionStatus.Rejected],
      },
    }),
  subscribers: async (parent) =>
    SubscriptionModel.find({
      targetId: parent.id,
      targetModel: SubscriptionTargetModel.User,
      status: {
        $in: [SubscriptionStatus.Waiting, SubscriptionStatus.Rejected],
      },
    }),
  friends: async (parent) =>
    SubscriptionModel.find({
      targetId: parent.id,
      targetModel: SubscriptionTargetModel.User,
      status: SubscriptionStatus.Accepted,
    }),
  createdAt: (parent) => parent.createdAt,
};

// -------------------- Additional models ---------------------

export const resolveLike: Resolvers['Like'] = {
  id: (parent) => parent.id,
  senderId: (parent) => parent.senderId,
  targetId: (parent) => parent.targetId,
  targetModel: (parent) => parent.targetModel,
  status: (parent) => parent.status,
  createdAt: (parent) => parent.createdAt,
};

export const resolveSubscribedUser: Resolvers['SubscribedUser'] = {
  id: (parent) => parent.id,
  senderId: (parent) => parent.senderId,
  targetId: (parent) => parent.targetId,
  targetModel: (parent) => parent.targetModel,
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
