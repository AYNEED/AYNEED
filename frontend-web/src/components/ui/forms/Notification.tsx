import React from 'react';
import { ApolloError } from 'apollo-client';

import { Msg } from 'src/i18n/Msg';

type Props = {
  error?: ApolloError;
};

export const Notification: React.FC<Props> = ({ error }) =>
  error ? (
    <div>
      {error.graphQLErrors.map(({ message }, i) => (
        <Msg key={i + message} id={message as never} />
      ))}
    </div>
  ) : null;
