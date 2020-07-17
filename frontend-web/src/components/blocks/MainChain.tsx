import React from 'react';
import { FelaComponent } from 'react-fela';
import { Styles } from 'src/utils/fela';

import { Ball } from 'src/routes/Main/Ball';
import { Idea } from 'src/components/icons/Idea';
import { Command } from 'src/components/icons/Command';
import { Investments } from 'src/components/icons/Investments';
import { Rocket } from 'src/components/icons/Rocket';


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
    marginLeft: '27px',
    width: '827px',
    height: '184px',
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


const MainChain: React.FC = () => (
  <FelaComponent style={styles.componentWrapper}>
    <Ball id="web.routes.Main.ball_idea" style={styles.idea}>
      <Idea />
    </Ball>

    <Ball id="web.routes.Main.ball_command" style={styles.command}>
      <Command />
    </Ball>

    <Ball id="web.routes.Main.ball_investments" style={styles.investments}>
      <Investments />
    </Ball>

    <Rocket style={styles.rocket}/>

    <Line />
  </FelaComponent>
);

export default MainChain;
