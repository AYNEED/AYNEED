import React from 'react';
import { useIntl } from 'react-intl';
import { FelaComponent } from 'react-fela';

import { Styles, PropsStyle } from 'src/utils/fela';
import { MsgProps } from 'src/i18n/Msg';
import { COLOR } from 'src/constants/colors';
import { FONT_SIZE, FONT_WEIGHT, font } from 'src/constants/fonts';
import { Msg, msg } from 'src/i18n/Msg';
import { VK } from 'src/components/icons/networks/VK';
import { Telegram } from 'src/components/icons/networks/Telegram';
import { Instagram } from 'src/components/icons/networks/Instagram';

type Props = {
  style: PropsStyle;
};

interface NetworkProps {
  id: MsgProps['id'];
  href: string;
  childNode: JSX.Element;
}

const styles: Styles<'title' | 'linksWrapper'> = {
  title: {
    ...font(FONT_SIZE.L, FONT_WEIGHT.REGULAR),
    color: COLOR.PRIMARY_200,
  },
  linksWrapper: {
    width: '90px',
    height: '18px',
    marginTop: '13px',
    display: 'flex',
    justifyContent: 'space-between',
  },
};

const networks: Array<NetworkProps> = [
  {
    id: 'networks.vk',
    href: 'https://vk.com/ayneed',
    childNode: <Instagram fill={COLOR.PRIMARY_300} />,
  },
  {
    id: 'networks.telegram',
    href: 'https://t.me/ayndme',
    childNode: <VK fill={COLOR.PRIMARY_300} />,
  },
  {
    id: 'networks.instagram',
    href: 'https://www.instagram.com/aynd.ru/',
    childNode: <Telegram fill={COLOR.PRIMARY_300} />,
  },
];

const Title: React.FC = () => (
  <FelaComponent style={styles.title}>
    <Msg id="web.routes.Main.fragments.MainPageNetworks.title" />
  </FelaComponent>
);

const Links: React.FC = () => {
  const intl = useIntl();

  return (
    <FelaComponent style={styles.linksWrapper}>
      {networks.map(({ id, href, childNode }) => (
        <a key={id} href={href} title={msg(intl, { id })}>
          {childNode}
        </a>
      ))}
    </FelaComponent>
  );
};

export const MainPageNetworks: React.FC<Props> = ({ style }) => (
  <FelaComponent style={style}>
    <Title />
    <Links />
  </FelaComponent>
);
