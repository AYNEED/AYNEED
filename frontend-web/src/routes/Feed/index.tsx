import React, { useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Page } from 'src/components/wrappers/Page';
import {
  GetUsersDocument,
  GetUsersQuery,
  OnUserAddedDocument,
  OnUserAddedSubscription,
} from 'src/__generated__';

const CardUser = React.lazy(() => import('src/components/ui/CardUser'));

const Feed: React.FC = () => {
  const { error, data, fetchMore, subscribeToMore } = useQuery<GetUsersQuery>(
    GetUsersDocument
  );

  useEffect(() => {
    subscribeToMore<OnUserAddedSubscription>({
      document: OnUserAddedDocument,
      updateQuery: (prev, { subscriptionData }) => ({
        ...prev,
        users: {
          ...prev.users,
          items: [subscriptionData.data.userAdded, ...prev.users.items],
        },
      }),
    });
  }, [subscribeToMore]);

  const loadMore = useCallback(() => {
    if (data && data.users.hasMore) {
      const { items } = data.users;

      fetchMore({
        query: GetUsersDocument,
        variables: { cursor: items[items.length - 1].id },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return prev;
          }

          return {
            ...prev,
            users: {
              ...prev.users,
              ...fetchMoreResult.users,
              items: [...prev.users.items, ...fetchMoreResult.users.items],
            },
          };
        },
      });
    }
  }, [fetchMore, data]);

  if (error) {
    return <p>Error</p>;
  }

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Page title>
      {data.users.items.map((user) => (
        <div key={user.id}>
          <CardUser {...user} />

          <hr />
        </div>
      ))}
      <div onClick={loadMore}>load mode</div>
    </Page>
  );
};

export default Feed;
