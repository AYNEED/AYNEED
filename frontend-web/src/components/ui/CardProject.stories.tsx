import React from 'react';
import { RendererProvider } from 'react-fela';
import { Story, Meta } from '@storybook/react/types-6-0';

import { renderer } from 'src/utils/fela';
import { IntlProvider } from 'src/i18n/IntlProvider';
import {CardProject} from 'src/components/ui/CardProject'

export default{
    title: 'Organisms/Cards/Project Card',
    component: CardProject
} as Meta

const Template: Story = (args) => (
    <IntlProvider>
        <RendererProvider renderer={renderer}>
            <CardProject {...args}></CardProject>
        </RendererProvider>
    </IntlProvider>
)

export const Example = Template.bind({});
Example.args = {
    title: '123',
    problem: 'sdf',
    solution: 'asdf'
}