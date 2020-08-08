import { ProjectRes, ProjectModel } from 'src/models/project';
import { Project, MutationProjectAddArgs } from 'src/__generated__';
import { ValidationError } from 'shared';
import { TokenToSenderId } from 'src/types';

export const findProjectById = async (
  id: Project['id']
): Promise<ProjectRes> => {
  const project = await ProjectModel.findById(id);

  if (!project) {
    throw new ValidationError('error.project.notFound');
  }

  return project;
};

export const createProject = async ({
  senderId,
  title,
  problem,
  solution,
}: TokenToSenderId<MutationProjectAddArgs>): Promise<ProjectRes> =>
  ProjectModel.create({
    senderId,
    title,
    problem,
    solution,
  });
