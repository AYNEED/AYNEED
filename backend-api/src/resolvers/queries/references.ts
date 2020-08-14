import { Resolvers } from 'src/__generated__';
import { findReferenceById } from 'src/helpers/references';

export const getReferenceById: Resolvers['Query']['reference'] = async (
  parent,
  query
) => {
  const reference = await findReferenceById(query.id);

  return reference;
};
