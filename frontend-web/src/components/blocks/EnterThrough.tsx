import React from 'react';
import { useIntl } from 'react-intl';
import { FelaComponent } from 'react-fela';

import { Styles } from 'src/utils/fela';
import { COLOR } from 'src/constants/colors';
import { font, FONT_SIZE, FONT_WEIGHT } from 'src/constants/fonts';
import { Msg, msg } from 'src/i18n/Msg';
import { Google } from 'src/components/icons/networks/Google';
import { Facebook } from 'src/components/icons/networks/Facebook';
import { VK } from 'src/components/icons/networks/VK';

const styles: Styles<'root' | 'message' | 'list'> = {
  root: {
    display: 'flex',
    marginBottom: 30,

    nested: {
      '> ul': {
        display: 'flex',
        listStyleType: 'none',
      },
    },
  },
  message: {
    marginRight: 10,
    color: COLOR.SECONDARY_200,
    ...font(FONT_SIZE.M, FONT_WEIGHT.SEMIBOLD),
  },
  list: {
    marginLeft: 10,
  },
};

export const EnterThrough: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <FelaComponent style={styles.root}>
        <FelaComponent style={styles.message}>
          <Msg id="web.components.blocks.EnterThrough.title" />
        </FelaComponent>

        <ul>
          <FelaComponent style={styles.list}>
            <li>
              <a href="/" title={msg(intl, { id: 'networks.google' })}>
                <Google fill={COLOR.SECONDARY_200} />
              </a>
            </li>
          </FelaComponent>

          <FelaComponent style={styles.list}>
            <li>
              <a href="/" title={msg(intl, { id: 'networks.facebook' })}>
                <Facebook fill={COLOR.SECONDARY_200} />
              </a>
            </li>
          </FelaComponent>

          <FelaComponent style={styles.list}>
            <li>
              <a href="/" title={msg(intl, { id: 'networks.vk' })}>
                <VK fill={COLOR.SECONDARY_200} />
              </a>
            </li>
          </FelaComponent>
        </ul>
      </FelaComponent>
    </>
  );
};
