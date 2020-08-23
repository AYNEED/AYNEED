import React from 'react';
import { useIntl } from 'react-intl';

import { Msg, msg } from 'src/i18n/Msg';
import { Google } from 'src/components/icons/networks/Google';
import { Facebook } from 'src/components/icons/networks/Facebook';
import { VK } from 'src/components/icons/networks/VK';

export const EnterThrough: React.FC = () => {
  const intl = useIntl();

  return (
    <>
      <Msg id="web.components.blocks.EnterThrough.title" />

      <ul>
        <li>
          <a href="/" title={msg(intl, { id: 'networks.google' })}>
            <Google />
          </a>
        </li>
        <li>
          <a href="/" title={msg(intl, { id: 'networks.facebook' })}>
            <Facebook />
          </a>
        </li>
        <li>
          <a href="/" title={msg(intl, { id: 'networks.vk' })}>
            <VK />
          </a>
        </li>
      </ul>
    </>
  );
};
