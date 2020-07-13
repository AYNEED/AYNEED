import React from 'react';
import { ApolloError } from 'apollo-client';

import { MsgProps, Msg } from 'src/i18n/Msg';

type Props = {
  error?: ApolloError;
};

export const Notification: React.FC<Props> = ({ error }) =>
  error ? (
    <div>
      <Msg id={error.graphQLErrors[0].message as MsgProps['id']} />
    </div>
  ) : null;
