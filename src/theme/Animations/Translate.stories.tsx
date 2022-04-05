import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useEffect, useState } from 'react';

import { Translate, translations } from './Translate'

export default {
  component: Translate,
  argTypes: { duration: { control: { type: 'number', min:0, max:4000, step: 100 } }}
} as ComponentMeta<typeof Translate>;

const Template: ComponentStory<typeof Translate> = ({ duration, translateInCoords, translateOutCoords }) => {
  const [animation, setAnimation] = useState<keyof typeof translations>('translateIn');
  useEffect(() => {
    const timer = setInterval(() => {
      (animation === 'translateIn') ? setAnimation('translateOut'): setAnimation('translateIn');
    }, duration);
    return () => clearTimeout(timer);
  }, [animation]);
  return (
    <Translate
      animation={animation}
      duration={duration}
      translateInCoords={translateInCoords}
      translateOutCoords={translateOutCoords}>
      <h1>Hello World.</h1>
    </Translate>
  );
};

export const Default = Template.bind({});
Default.args = {
  duration: 1000,
};

export const ModifiedTranslations = Template.bind({});
ModifiedTranslations.args = {
  duration: 1000,
  translateInCoords: {
    '0%': {
      coord1: '0px',
      coord2: '0px'
    },
    '25%': {
      coord1: '100px',
      coord2: '100px'
    },
    '50%': {
      coord1: '50px',
      coord2: '50px'
    },
    '75%': {
      coord1: '100px',
      coord2: '100px'
    },
    '100%': {
      coord1: '100px',
      coord2: '100px'
    },
  },
  translateOutCoords: {
    '100%': {
      coord1: '0px',
      coord2: '0px'
    },
    '75%': {
      coord1: '0px',
      coord2: '0px'
    },
    '50%': {
      coord1: '50px',
      coord2: '50px'
    },
    '25%': {
      coord1: '0px',
      coord2: '0px'
    },
    '0%': {
      coord1: '100px',
      coord2: '100px'
    },
  }
};