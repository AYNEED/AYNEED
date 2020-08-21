import { HelpsModel, HelpRes } from 'src/models/helps';
import { Help } from 'src/__generated__';

import { ValidationError } from 'shared';

export const findHelpByLocale = async (
  locale: Help['locale']
): Promise<HelpRes> => {
  const help = await HelpsModel.findOne({ locale });

  if (!help) {
    throw new ValidationError('error.help.notFound');
  }

  return help;
};
