import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { RendererProvider, FelaComponent } from 'react-fela';
import { renderer, Styles } from 'src/utils/fela';
import { Tooltip, Props } from 'src/components/ui/Tooltip';

export default {
  title: 'Molecules/Tooltip',
  component: Tooltip,
} as Meta;

const style: Styles<'block'> = {
  block: {
    position: 'relative',
    top: '100px',
    left: '50%',
    width: '50px',
    height: '50px',
    background: 'red',
  },
};

const TemplateOne: Story<Props> = (args) => (
  <RendererProvider renderer={renderer}>
    <FelaComponent style={style.block}>
      <Tooltip {...args} />
    </FelaComponent>
  </RendererProvider>
);

export const TooltipUp = TemplateOne.bind({});
TooltipUp.args = {
  text: 'Some text...',
  type: 'up',
};

export const TooltipDown = TemplateOne.bind({});
TooltipDown.args = {
  text: 'Some text...',
  type: 'down',
};

export const TooltipRight = TemplateOne.bind({});
TooltipRight.args = {
  text: 'Some text...',
  type: 'right',
};

export const TooltipLeft = TemplateOne.bind({});
TooltipLeft.args = {
  text: 'Some text...',
  type: 'left',
};
