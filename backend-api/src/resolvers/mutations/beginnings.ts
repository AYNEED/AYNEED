import { Resolvers } from 'src/__generated__';
import { findUserById } from 'src/helpers/users';
import { createBeginning } from 'src/helpers/beginnings';
import { ValidationError } from 'shared';

export const addBeginning: Resolvers['Mutation']['addBeginning'] = async (
  parent,
  { authorId, title, problem, solution }
) => {
  const user = await findUserById(authorId);

  if (user.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  return await createBeginning({
    authorId,
    title,
    problem,
    solution,
  });
};
