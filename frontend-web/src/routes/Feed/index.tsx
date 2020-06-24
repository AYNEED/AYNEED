import React, { useEffect } from 'react';

import { Page } from 'src/components/wrappers/Page';
import {
  useGetUsersQuery,
  OnUserAddedDocument,
  OnUserAddedSubscription,
} from 'src/__generated__';

const Feed: React.FC = () => {
  const { loading, error, data, subscribeToMore } = useGetUsersQuery();

  useEffect(() => {
    subscribeToMore<OnUserAddedSubscription>({
      document: OnUserAddedDocument,
      updateQuery: (prev, { subscriptionData }) => ({
        ...prev,
        users: [subscriptionData.data.userAdded, ...prev.users],
      }),
    });
  }, [subscribeToMore]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !data) {
    return <p>Error</p>;
  }

  return (
    <Page title>
      {data.users.map(({ id, personal }) => (
        <p key={id}>
          {personal.firstName}: {personal.lastName}
        </p>
      ))}
    </Page>
  );
};

export default Feed;
