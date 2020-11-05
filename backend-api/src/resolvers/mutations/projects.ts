import { Resolvers } from 'src/generated';
import { createProject } from 'src/helpers/projects';
import { ValidationError } from 'shared';
import { UPDATES } from 'src/notifications/events';
import { send } from 'src/notifications';

export const projectAdd: Resolvers['Mutation']['projectAdd'] = async (
  parent,
  { title, problem, solution },
  { user }
) => {
  if (!user) {
    throw new ValidationError('error.user.notFound');
  }

  if (user.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  const project = await createProject({
    senderId: user.id,
    title,
    problem,
    solution,
  });

  await send.update({
    event: UPDATES.PROJECT_UPDATED,
    payload: project,
  });

  return project;
};

export const projectRemove: Resolvers['Mutation']['projectRemove'] = async (
  parent,
  { id }
) => {
  // TODO: remove project from db
  return true;
};
