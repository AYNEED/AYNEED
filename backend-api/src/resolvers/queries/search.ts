import {
  UserClient,
  ProjectStatus,
  Resolvers,
  SearchTargetModel,
  SearchResult,
  QuerySearchArgs,
} from 'src/__generated__';
import { ProjectModel } from 'src/models/project';
import { UserModel } from 'src/models/user';
import { FEED_LIMIT, SEARCH_RESULT_LIMIT } from 'src/constants';
import { userDriver } from 'src/resolvers/drivers';

const searchModeToHandler: {
  [key in SearchTargetModel]: (query: QuerySearchArgs) => Promise<SearchResult>;
} = {
  [SearchTargetModel.Users]: async ({ query, cursor }) => {
    const data = await UserModel.find(
      {
        $and: [
          cursor ? { _id: { $lt: cursor } } : {},
          { 'personal.firstName': { $regex: '^' + query + '.*' } },
        ],
      },
      null,
      { sort: { createdAt: 'desc' }, limit: FEED_LIMIT }
    );

    const last = data[data.length - 1];

    let count = 0;

    if (last) {
      count = await UserModel.count({
        $and: [
          { _id: { $lt: last.id } },
          { 'personal.firstName': { $regex: '^' + query + '.*' } },
        ],
      });
    }

    return {
      items: data.map((user) =>
        userDriver(user, {
          network: { isOnline: false, client: UserClient.Desktop },
        })
      ),
      hasMore: !!count,
    };
  },

  [SearchTargetModel.Candidates]: async () => ({ items: [], hasMore: false }),

  [SearchTargetModel.Concepts]: async ({ query }) => {
    const data = await ProjectModel.find(
      { title: /query/i, status: ProjectStatus.Concept },
      null,
      { sort: { createdAt: 'desc' }, limit: SEARCH_RESULT_LIMIT }
    );

    const last = data[data.length - 1];

    let count = 0;

    if (last) {
      count = await ProjectModel.count({
        title: /query/i,
        status: ProjectStatus.Concept,
      });
    }

    return { items: data, hasMore: !!count };
  },

  [SearchTargetModel.Ideas]: async ({ query }) => {
    const data = await ProjectModel.find(
      {
        title: /query/i,
        status: ProjectStatus.Idea,
      },
      null,
      { sort: { createdAt: 'desc' }, limit: SEARCH_RESULT_LIMIT }
    );

    const last = data[data.length - 1];

    let count = 0;

    if (last) {
      count = await ProjectModel.count({
        title: /query/i,
        status: ProjectStatus.Idea,
      });
    }

    return { items: data, hasMore: !!count };
  },

  [SearchTargetModel.Mvps]: async ({ query }) => {
    const data = await ProjectModel.find(
      {
        title: /query/i,
        status: ProjectStatus.Mvp,
      },
      null,
      { sort: { createdAt: 'desc' }, limit: SEARCH_RESULT_LIMIT }
    );

    const last = data[data.length - 1];

    let count = 0;

    if (last) {
      count = await ProjectModel.count({
        title: /query/i,
        status: ProjectStatus.Mvp,
      });
    }

    return { items: data, hasMore: !!count };
  },
};

export const getSearchResults: Resolvers['Query']['search'] = async (
  parent,
  { query, targetModel, cursor }
) =>
  searchModeToHandler[targetModel]({
    query,
    targetModel,
    cursor: cursor || null,
  });
