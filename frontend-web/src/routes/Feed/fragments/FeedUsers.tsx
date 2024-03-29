import React, { useEffect, useCallback } from 'react';
import { useQuery } from '@apollo/client';

import { LazyList } from 'src/components/wrappers/LazyList';
import {
  GetUsersDocument,
  GetUsersQuery,
  OnUserAddedDocument,
  OnUserAddedSubscription,
  OnUserUpdatedDocument,
  OnUserUpdatedSubscription,
  CommonUserFieldsFragment,
} from 'src/generated';
import { Msg } from 'src/i18n/Msg';
import { CardUser } from 'src/components/ui/CardUser';

export const FeedUsers: React.FC = () => {
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

    subscribeToMore<OnUserUpdatedSubscription>({
      document: OnUserUpdatedDocument,
      updateQuery: (prev, { subscriptionData }) => ({
        ...prev,
        users: {
          ...prev.users,
          items: prev.users.items.map((user) =>
            user.id === subscriptionData.data.userUpdated.id
              ? subscriptionData.data.userUpdated
              : user
          ),
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

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>
        <Msg id="web.routes.Feed.fragments.FeedUsers.title" />
      </h2>

      {error && <p>Error</p>}

      {data?.users?.items?.length && (
        <LazyList<CommonUserFieldsFragment>
          callback={loadMore}
          data={data.users.items}
          children={CardUser}
        />
      )}
    </>
  );
};
