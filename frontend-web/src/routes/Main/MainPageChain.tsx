import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { MsgProps } from 'src/i18n/Msg';
import { Idea } from 'src/components/icons/Idea';
import { Command } from 'src/components/icons/Command';
import { Investments } from 'src/components/icons/Investments';
import { Rocket } from 'src/components/icons/Rocket';
import { RocketPlume } from 'src/components/icons/RocketPlume';
import { DashedLine } from 'src/components/icons/DashedLine';
import { MainPageCircle } from 'src/routes/Main/MainPageCircle';


const styles: Styles<
  'componentWrapper' |
  'rocket' |
  'idea' |
  'command' |
  'investments'
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
  }
}

const circles: Array<{ id:  MsgProps['id'], circleStyle: {}, childNode: React.FC }> = [
  {
    id: 'web.routes.Main.ball_idea',
    circleStyle: styles.idea,
    childNode: Idea,
  },
  {
    id: 'web.routes.Main.ball_command',
    circleStyle: styles.command,
    childNode: Command
  },
  {
    id: 'web.routes.Main.ball_investments',
    circleStyle: styles.investments,
    childNode: Investments
  },
] 


const RocketWithPlume: React.FC = () => (
  <FelaComponent style={styles.rocket}>
    <Rocket />
    <RocketPlume />
  </FelaComponent>
)


export const MainPageChain: React.FC = () => (
  <FelaComponent style={styles.componentWrapper}>
    { circles.map(circle => (
      <MainPageCircle 
        key={circle.id} 
        id={circle.id}
        style={circle.circleStyle}
      >
        { React.createElement(circle.childNode) }
      </MainPageCircle>
    ))}

    <RocketWithPlume/>

    <DashedLine />
  </FelaComponent>
);
