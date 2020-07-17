import React from 'react';
import { FormattedMessage, IntlShape as IIntlShape } from 'react-intl';
import { FelaComponent } from 'react-fela';

import { DictionaryKey } from 'shared';

export type IntlShape = IIntlShape;

export interface MsgProps {
  id: DictionaryKey;
  values?: Record<string, React.ReactNode>;
  style?: object
}

export const msg = (intl: IntlShape, { id, values }: MsgProps): string =>
  intl.formatMessage({ id }, values as never);

export const Msg: React.FC<MsgProps> = ({ id, values, style = {} }) => ( 
  <FelaComponent as="span" style={style}>
    <FormattedMessage id={id} values={values} />
  </FelaComponent>
);
