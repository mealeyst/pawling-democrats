import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Shake } from './Shake'

export default {
  component: Shake,
} as ComponentMeta<typeof Shake>;

const Template: ComponentStory<typeof Shake> = ({ duration }) => {

  return (
    <Shake duration={duration} animationCount='infinite'>
      <h1>Hello World.</h1>
    </Shake>
  );
};

export const Default = Template.bind({});
Default.args = {
  duration: 1000,
};