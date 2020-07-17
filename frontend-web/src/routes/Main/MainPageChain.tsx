import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { DictionaryKey } from 'shared';

import { Idea } from 'src/components/icons/Idea';
import { Command } from 'src/components/icons/Command';
import { Investments } from 'src/components/icons/Investments';
import { Rocket } from 'src/components/icons/Rocket';
import { RocketPlume } from 'src/components/icons/RocketPlume';
import { MainPageCircle } from './MainPageCircle';


const styles: Styles<
  'componentWrapper' |
  'line' | 
  'rocket' |
  'idea' |
  'command' |
  'investments'
> = {
  componentWrapper: {
    position: 'relative',
    width: '43vw',
    height: '184px',
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
    transform: 'rotateZ(42deg)',
  },
  line: {
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundImage: ('url("data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iODI4IiBoZWlnaHQ9IjE4NiIgdmlld0JveD0iMCAwIDgyOCAxODYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjUgMTg1QzE5NCAxODUgNjQzLjUgMTg1IDgyNyAxLjUiIHN0cm9rZT0iIzI3QUU2MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSIzMCAzMCIvPgo8L3N2Zz4K")')
  },
  idea: {
    bottom: '-35%',
    left: '19.5%',
  },
  command: {
    bottom: '-22%',
    left: '48%',
  },
  investments: {
    bottom: '8%',
    left: '75.5%',
  }
}

const circles: Array<{ id: DictionaryKey, circleStyle: object, childNode: React.FC }> = [
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

const Line: React.FC = () => (
  <FelaComponent style={styles.line}></FelaComponent>
)

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

    <Line />
  </FelaComponent>
);
