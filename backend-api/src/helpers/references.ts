import {
  ReferencesAreaModel,
  ReferencesAreaRes,
} from 'src/models/referencesArea';
import { ReferencesArea } from 'src/__generated__';

import { ValidationError } from 'shared';

export const findReferenceById = async (
  id: ReferencesArea['id']
): Promise<ReferencesAreaRes> => {
  const reference = await ReferencesAreaModel.findById(id);

  if (!reference) {
    throw new ValidationError('error.reference.notFound');
  }

  return reference;
};
