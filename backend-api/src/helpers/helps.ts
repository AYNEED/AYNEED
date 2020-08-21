import {
  HelpsModel,
  HelpRes,
  HelpItemRes,
  HelpItemModel,
} from 'src/models/helps';
import {
  Help,
  HelpItem,
} from 'src/__generated__';

import { ValidationError } from 'shared';

export const findHelpById = async (id: Help['id']): Promise<HelpRes> => {
  const help = await HelpsModel.findById(id);

  if (!help) {
    throw new ValidationError('error.help.notFound');
  }

  return help;
};

export const findHelpItemById = async (
  id: HelpItem['id']
): Promise<HelpItemRes> => {
  const helpItem = await HelpItemModel.findById(id);

  if (!helpItem) {
    throw new ValidationError('error.helpItem.notFound');
  }

  return helpItem;
};
