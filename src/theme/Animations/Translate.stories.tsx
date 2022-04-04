import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Translate, animations } from './Translate'

export default {
  component: Translate,
  argTypes: { duration: { control: { type: 'number', min:0, max:4000, step: 100 } }}
} as ComponentMeta<typeof Translate>;

const Template: ComponentStory<typeof Translate> = ({ duration }) => {
  const [animation, setAnimation] = useState<keyof typeof animations>('translateIn');
  useEffect(() => {
    const timer = setInterval(() => {
      (animation === 'translateIn') ? setAnimation('translateOut'): setAnimation('translateIn');
    }, duration);
    return () => clearTimeout(timer);
  }, [animation]);
  return (
    <Translate animation={animation} duration={duration}>
      <h1>Hello World.</h1>
    </Translate>
  );
};

export const Default = Template.bind({});
Default.args = {
  duration: 1000,
};