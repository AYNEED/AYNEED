import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider, FelaComponent } from 'react-fela';
import { Router as ReactRouter } from 'react-router-dom';

import { ROUTES } from 'shared';
import { history } from 'src/navigation/store';
import { renderer, Styles } from 'src/utils/fela';
import { Link, Props } from 'src/components/ui/Link';
import { Favourites } from 'src/components/icons/interactions/Favourites';

export default {
  title: 'Molecules/Links',
  component: Link,
} as Meta;

const style: Styles<'block' | 'blockText'> = {
  block: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  blockText: {
    marginLeft: 10,
    paddingBottom: 2,
  },
};

const Template: Story<Props> = (args) => (
  <RendererProvider renderer={renderer}>
    <ReactRouter history={history}>
      <Link {...args} />
    </ReactRouter>
  </RendererProvider>
);

export const DefaultTextLink = Template.bind({});
DefaultTextLink.args = {
  mode: 'text',
  url: { scheme: ROUTES.MAIN },
  children: 'Default text link',
};

export const NegativeTextLink = Template.bind({});
NegativeTextLink.args = {
  mode: 'text',
  url: { scheme: ROUTES.MAIN },
  children: 'Negative text link',
  theme: 'negative',
};

export const ActiveTextLink = Template.bind({});
ActiveTextLink.args = {
  mode: 'text',
  url: { scheme: ROUTES.MAIN },
  children: 'Active text link',
  active: true,
};

export const DisabledTextLink = Template.bind({});
DisabledTextLink.args = {
  mode: 'text',
  url: { scheme: ROUTES.MAIN },
  children: 'Disabled text link',
  disabled: true,
};

export const DefaultBlockLink = Template.bind({});
DefaultBlockLink.args = {
  mode: 'block',
  url: { scheme: ROUTES.MAIN },
  children: (
    <FelaComponent style={style.block}>
      <Favourites filled />
      <FelaComponent style={style.blockText} as="span">
        Default block link
      </FelaComponent>
    </FelaComponent>
  ),
};

export const NegativeBlockLink = Template.bind({});
NegativeBlockLink.args = {
  mode: 'block',
  url: { scheme: ROUTES.MAIN },
  children: (
    <FelaComponent style={style.block}>
      <Favourites filled />
      <FelaComponent style={style.blockText} as="span">
        Negative block link
      </FelaComponent>
    </FelaComponent>
  ),
  theme: 'negative',
};

export const ActiveBlockLink = Template.bind({});
ActiveBlockLink.args = {
  mode: 'block',
  url: { scheme: ROUTES.MAIN },
  children: (
    <FelaComponent style={style.block}>
      <Favourites filled />
      <FelaComponent style={style.blockText} as="span">
        Active block link
      </FelaComponent>
    </FelaComponent>
  ),
  active: true,
};

export const DisabledBlockLink = Template.bind({});
DisabledBlockLink.args = {
  mode: 'block',
  url: { scheme: ROUTES.MAIN },
  children: (
    <FelaComponent style={style.block}>
      <Favourites filled />
      <FelaComponent style={style.blockText} as="span">
        Disabled block link
      </FelaComponent>
    </FelaComponent>
  ),
  disabled: true,
};
