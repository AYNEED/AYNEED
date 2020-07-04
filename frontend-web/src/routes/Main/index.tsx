import React from 'react';

import { Page } from 'src/components/wrappers/Page';
import { connect, FelaWithStylesProps, Rules } from 'react-fela';

interface Styles {
  container: any;
  greetingRow: any;
}

type PropsType = FelaWithStylesProps<null, Styles, null>;

const Main: React.FC<PropsType> = (props) => {
  const { styles } = props;

  return (
    <div>
      <Page title />
      <div className={styles.container}>
        <div className={styles.greetingRow}>Hola :)</div>
      </div>
    </div>
  );
};

const complexMainStyle: Rules<null, Styles, null> = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    borderRadius: '18px',
    minHeight: '500px',
  },
  greetingRow: {
    fontSize: '6rem',
    textAlign: 'center',
    padding: '2rem',
    margin: '2rem',
  },
});

export default connect(complexMainStyle)(Main);
