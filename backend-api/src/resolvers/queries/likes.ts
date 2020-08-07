import { Resolvers } from 'src/__generated__';
import { findLikeById } from 'src/helpers/likes';

export const getLikeById: Resolvers['Query']['like'] = async (parent, query) =>
  findLikeById(query.id);
