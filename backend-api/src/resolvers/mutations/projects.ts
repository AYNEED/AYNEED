import { Resolvers } from 'src/__generated__';
import { findUserById, findSenderIdByToken } from 'src/helpers/users';
import { createProject } from 'src/helpers/projects';
import { ValidationError } from 'shared';
import { UPDATES } from 'src/notifications/events';
import { send } from 'src/notifications';

export const projectAdd: Resolvers['Mutation']['projectAdd'] = async (
  parent,
  { token, title, problem, solution }
) => {
  const senderId = await findSenderIdByToken(token);
  const sender = await findUserById(senderId);

  if (sender.statistics.completeness !== 100) {
    throw new ValidationError('error.user.incompleteProfile');
  }

  const project = await createProject({
    senderId,
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
  { token, id }
) => {
  // TODO: remove project from db
  return true;
};
