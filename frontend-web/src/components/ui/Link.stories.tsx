import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider, FelaComponent } from 'react-fela';
import { Router as ReactRouter } from 'react-router-dom';

import { ROUTES } from 'shared';
import { COLOR } from 'src/constants/colors';
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

export const ColorizedTextLink = Template.bind({});
ColorizedTextLink.args = {
  mode: 'text',
  url: { scheme: ROUTES.MAIN },
  children: 'Colorized text link',
  color: COLOR.SECONDARY_200,
};

export const ActiveTextLink = Template.bind({});
ActiveTextLink.args = {
  mode: 'text',
  url: { scheme: ROUTES.MAIN },
  children: 'Active text link',
  isActive: true,
};

export const DisabledTextLink = Template.bind({});
DisabledTextLink.args = {
  mode: 'text',
  url: { scheme: ROUTES.MAIN },
  children: 'Disabled text link',
  isDisabled: true,
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

export const ColorizedBlockLink = Template.bind({});
ColorizedBlockLink.args = {
  mode: 'block',
  url: { scheme: ROUTES.MAIN },
  children: (
    <FelaComponent style={style.block}>
      <Favourites filled />
      <FelaComponent style={style.blockText} as="span">
        Colorized block link
      </FelaComponent>
    </FelaComponent>
  ),
  color: COLOR.SECONDARY_200,
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
  isActive: true,
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
  isDisabled: true,
};
