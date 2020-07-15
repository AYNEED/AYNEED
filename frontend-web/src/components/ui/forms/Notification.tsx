import React from 'react';
import { ApolloError } from 'apollo-client';

import { defaultDictionary } from 'shared';
import { Msg } from 'src/i18n/Msg';

type Props = {
  error?: ApolloError;
};

export const Notification: React.FC<Props> = ({ error }) => {
  if (!error) {
    return null;
  }

  return (
    <div>
      {!error.graphQLErrors.length && error.networkError && (
        <Msg id="error.system.network" />
      )}

      {error.graphQLErrors.map(({ message }, i) => {
        const id = message as never;

        if (defaultDictionary[id]) {
          return <Msg key={i + message} id={id} />;
        }

        return message; // TODO: send Sentry event
      })}
    </div>
  );
};
