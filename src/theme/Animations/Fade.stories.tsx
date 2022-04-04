import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Fade, animations } from './Fade'

export default {
  component: Fade,
  argTypes: { duration: { control: { type: 'number', min:0, max:4000, step: 100 } }}
} as ComponentMeta<typeof Fade>;

const Template: ComponentStory<typeof Fade> = ({ duration }) => {
  const [animation, setAnimation] = useState<keyof typeof animations>('fadeIn');
  useEffect(() => {
    const timer = setInterval(() => {
      (animation === 'fadeIn') ? setAnimation('fadeOut'): setAnimation('fadeIn');
    }, duration);
    return () => clearTimeout(timer);
  }, [animation]);
  return (
    <Fade animation={animation} duration={duration}>
      <h1>Hello World.</h1>
    </Fade>
  );
};

export const Default = Template.bind({});
Default.args = {
  duration: 1000,
};