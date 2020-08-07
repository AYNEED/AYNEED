import React from 'react';

import { SearchForm } from 'src/components/blocks/SearchForm';
import { Page } from 'src/components/wrappers/Page';
import { FeedProjects } from 'src/routes/Feed/FeedProjects';
import { FeedUsers } from 'src/routes/Feed/FeedUsers';

const Feed: React.FC = () => (
  <Page>
    <SearchForm onSubmit={console.log} withChangeHistory />

    <FeedProjects />
    <FeedUsers />
  </Page>
);

export default Feed;
