import { Resolvers } from 'src/__generated__';
import { findUserById } from 'src/helpers/users';
import { createBeginning } from 'src/helpers/beginnings';
import { ValidationError } from 'shared';
import { UPDATES } from 'src/notifications/events';
import { send } from 'src/notifications';

export const addBeginning: Resolvers['Mutation']['addBeginning'] = async (
  parent,
  { authorId, title, problem, solution }
) => {
  const user = await findUserById(authorId);

  if (user.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  const beginning = await createBeginning({
    authorId,
    title,
    problem,
    solution,
  });

  await send.update({
    event: UPDATES.BEGINNING_UPDATED,
    payload: beginning,
  });

  return beginning;
};
