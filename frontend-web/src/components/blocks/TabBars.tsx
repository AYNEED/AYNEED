import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { MsgProps } from 'src/i18n/Msg';
import { Button } from 'src/components/ui/forms/Button';

const styles: Styles<'container'> = {
  container: {
    height: 46,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
    nested: {
      '> *': {
        marginRight: 24,
        nested: {
          ':last-child': {
            marginRight: 0,
          },
        },
      },
    },
  },
};

type Props = {
  tabType: tabKeys;
};

enum tabKeys {
  profile = 'profile',
  subscriptions = 'subscriptions',
  friend = 'friend',
  mvp_concepts = 'mvp_concepts',
  idea = 'idea',
}

enum titleKeys {
  beginnings = 'beginnings',
  participants = 'participants',
  participate = 'participate',
  team = 'team',
  needInTeam = 'needInTeam',
  friends = 'friends',
  idea = 'idea',
  concepts = 'concepts',
  mvp = 'mvp',
  archive = 'archive',
  searchFriends = 'searchFriends',
  reports = 'reports',
}

const tabTitles: { [key in titleKeys]: MsgProps['id'] } = {
  beginnings: 'web.components.blocks.TabBars.beginnings',
  participants: 'web.components.blocks.TabBars.participants',
  participate: 'web.components.blocks.TabBars.participate',
  team: 'web.components.blocks.TabBars.team',
  needInTeam: 'web.components.blocks.TabBars.need_in_team',
  friends: 'web.components.blocks.TabBars.friends',
  idea: 'web.components.blocks.TabBars.ideas',
  concepts: 'web.components.blocks.TabBars.concepts',
  mvp: 'web.components.blocks.TabBars.mvp',
  archive: 'web.components.blocks.TabBars.archive',
  searchFriends: 'web.components.blocks.TabBars.search_friends',
  reports: 'web.components.blocks.TabBars.reports',
};

const tabs: {
  [key in tabKeys]: Array<MsgProps['id']>;
} = {
  profile: [tabTitles.beginnings, tabTitles.participate, tabTitles.archive],
  subscriptions: [
    tabTitles.idea,
    tabTitles.concepts,
    tabTitles.mvp,
    tabTitles.archive,
  ],
  friend: [tabTitles.friends, tabTitles.searchFriends],
  mvp_concepts: [tabTitles.team, tabTitles.needInTeam, tabTitles.reports],
  idea: [tabTitles.participants, tabTitles.needInTeam, tabTitles.reports],
};

export const TabBars: React.FC<Props> = ({ tabType }) => {
  return (
    <>
      <FelaComponent style={styles.container}>
        {tabs[tabType].map((item, index) => (
          <Button key={index} mode="text" text={{ id: item }} />
        ))}
      </FelaComponent>
    </>
  );
};
