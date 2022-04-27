import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

export default {
  title: 'Denis/Button',
  component: Button,
  argTypes: {

  },
} as ComponentMeta<typeof Button>;

// templaet of how args map to rendering which is then reused for various stories
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Primary story
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  disabled: false,
  text: 'Primary',
};

// Secondary story
export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Secondary',
};

// Disabled story
export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true
};
