import React from 'react';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { DictionaryKey } from 'shared';

import { Idea } from 'src/components/icons/Idea';
import { Command } from 'src/components/icons/Command';
import { Investments } from 'src/components/icons/Investments';
import { Rocket } from 'src/components/icons/Rocket';
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
    width: '827px',
    height: '184px',
    marginLeft: '27px',
  },
  rocket: {
    position: 'absolute',
    right: '-60px',
    top: '-65px',
    transform: 'rotateZ(45deg)',
  },
  line: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '827px',
    height: '184px',
    zIndex: 2,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundImage: ('url("data:image/svg+xml;base64, PHN2ZyB3aWR0aD0iODI4IiBoZWlnaHQ9IjE4NiIgdmlld0JveD0iMCAwIDgyOCAxODYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0wLjUgMTg1QzE5NCAxODUgNjQzLjUgMTg1IDgyNyAxLjUiIHN0cm9rZT0iIzI3QUU2MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtZGFzaGFycmF5PSIzMCAzMCIvPgo8L3N2Zz4K")')
  },
  idea: {
    bottom: '-65px',
    left: '160px',
  },
  command: {
    bottom: '-40px',
    left: '400px',
  },
  investments: {
    bottom: '15px',
    left: '620px',
  }
}

const Line: React.FC = () => (
  <FelaComponent style={styles.line}></FelaComponent>
)

const circles: Array<{id: DictionaryKey, circleStyle: object, icon: React.FC}> = [
  {
    id: 'web.routes.Main.ball_idea',
    circleStyle: styles.idea,
    icon: Idea,
  },
  {
    id: 'web.routes.Main.ball_command',
    circleStyle: styles.command,
    icon: Command
  },
  {
    id: 'web.routes.Main.ball_investments',
    circleStyle: styles.investments,
    icon: Investments
  },
] 



const MainPageChain: React.FC = () => (
  <FelaComponent style={styles.componentWrapper}>
    { circles.map(circle => (
      <MainPageCircle 
        key={circle.id} 
        id={circle.id}
        style={circle.circleStyle}
      >
        { React.createElement(circle.icon) }
      </MainPageCircle>
    ))}

    <Rocket style={styles.rocket}/>

    <Line />
  </FelaComponent>
);

export default MainPageChain;
