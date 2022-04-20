import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC, useEffect, useState } from 'react';

import { Button } from './Button';

export default {
  component: Button

} as ComponentMeta<FC>;

const Template: ComponentStory<typeof Button> = (props) => {
  return (
    <Button {...props} />
  )
};

export const Title = Template.bind({});
Title.args = {
  children: 'Button Text'
};