import React from 'react';

import { SearchForm } from 'src/components/blocks/SearchForm';
import { Page } from 'src/components/wrappers/Page';
import { FeedBeginnings } from 'src/routes/Feed/FeedBeginnings';
import { FeedUsers } from 'src/routes/Feed/FeedUsers';

const Feed: React.FC = () => (
  <Page>
    <SearchForm onSubmit={console.log} withChangeHistory />

    <FeedBeginnings />
    <FeedUsers />
  </Page>
);

export default Feed;
