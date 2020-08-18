import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles, PropsStyle } from 'src/utils/fela';
import { MsgProps } from 'src/i18n/Msg';
import { Idea } from 'src/components/icons/projects/Idea';
import { Command } from 'src/components/icons/old_design/Command';
import { Investments } from 'src/components/icons/old_design/Investments';
import { Rocket } from 'src/components/icons/old_design/Rocket';
import { RocketPlume } from 'src/components/icons/old_design/RocketPlume';
import { DashedLine } from 'src/components/icons/old_design/DashedLine';
import { MainPageCircle } from 'src/routes/Main/fragments/MainPageCircle';

interface CircleProps {
  id: MsgProps['id'];
  circleStyle: PropsStyle;
  childNode: React.FC;
}

const styles: Styles<
  'componentWrapper' | 'rocket' | 'idea' | 'command' | 'investments'
> = {
  componentWrapper: {
    position: 'relative',
    width: '827px',
    height: '185px',
    marginLeft: '27px',
  },
  rocket: {
    position: 'absolute',
    right: '-67px',
    top: '-75px',
    width: '63px',
    height: '64px',
    display: 'flex !important',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    transform: 'rotateZ(40deg)',
  },
  idea: {
    bottom: '-65px',
    left: '150px',
  },
  command: {
    bottom: '-40px',
    left: '397px',
  },
  investments: {
    bottom: '15px',
    left: '630px',
  },
};

const circles: Array<CircleProps> = [
  {
    id: 'web.routes.Main.fragments.MainPageChain.idea',
    circleStyle: styles.idea,
    childNode: Idea,
  },
  {
    id: 'web.routes.Main.fragments.MainPageChain.command',
    circleStyle: styles.command,
    childNode: Command,
  },
  {
    id: 'web.routes.Main.fragments.MainPageChain.investments',
    circleStyle: styles.investments,
    childNode: Investments,
  },
];

const RocketWithPlume: React.FC = () => (
  <FelaComponent style={styles.rocket}>
    <Rocket />
    <RocketPlume />
  </FelaComponent>
);

const Circles: React.FC = () => (
  <>
    {circles.map(({ id, circleStyle, childNode }) => (
      <MainPageCircle key={id} id={id} style={circleStyle}>
        {React.createElement(childNode)}
      </MainPageCircle>
    ))}
  </>
);

export const MainPageChain: React.FC = () => (
  <FelaComponent style={styles.componentWrapper}>
    <Circles />

    <RocketWithPlume />

    <DashedLine />
  </FelaComponent>
);
