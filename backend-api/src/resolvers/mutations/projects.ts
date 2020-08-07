import { Resolvers } from 'src/__generated__';
import { findUserById } from 'src/helpers/users';
import { createProject } from 'src/helpers/projects';
import { ValidationError } from 'shared';
import { UPDATES } from 'src/notifications/events';
import { send } from 'src/notifications';

export const addProject: Resolvers['Mutation']['addProject'] = async (
  parent,
  { authorId, title, problem, solution }
) => {
  const user = await findUserById(authorId);

  if (user.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  const project = await createProject({
    authorId,
    title,
    problem,
    solution,
  });

  await send.update({
    event: UPDATES.BEGINNING_UPDATED,
    payload: project,
  });

  return project;
};
