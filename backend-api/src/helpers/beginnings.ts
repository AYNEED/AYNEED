import { BeginningRes, BeginningModel } from 'src/models/beginning';

import { Beginning } from 'src/__generated__';
import { ValidationError } from 'shared';

export const findBeginningById = async (
  id: Beginning['id']
): Promise<BeginningRes> => {
  const beginning = await BeginningModel.findById(id);

  if (!beginning) {
    throw new ValidationError('error.beginning.notFound');
  }

  return beginning;
};
