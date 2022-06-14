import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC } from 'react';

import * as Typography from './Typography';
import { TypographyProps } from './Typography';

type TypographyStoryProps = {
  typography: keyof typeof Typography
}

export default {
  title: 'theme/Typography',
  argTypes: {
    typography: { table: { disable: true } },
    bold: {
      options: ['normal', 'bold'],
      control: { type: 'radio' },
    },
    italic: {
      options: ['normal', 'italic'],
      control: { type: 'radio' },
    },
    underline: {
      options: ['none', 'underline'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<FC>;

const Template: ComponentStory<FC<TypographyStoryProps & TypographyProps>> = ({ children, typography, ...props }) => {
  const Component = Typography[typography];
  return (
    <Component {...props}>{children}</Component>
  );
};

export const Title = Template.bind({});
Title.args = {
  typography: 'Title',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American',
  bold: 'normal',
  italic: 'normal',
  underline: 'none',
};

export const H1 = Template.bind({});
H1.args = {
  typography: 'H1',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American',
  bold: 'normal',
  italic: 'normal',
  underline: 'none',
};

export const H2 = Template.bind({});
H2.args = {
  typography: 'H2',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American',
  bold: 'normal',
  italic: 'normal',
  underline: 'none',
};

export const H3 = Template.bind({});
H3.args = {
  typography: 'H3',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American',
  bold: 'normal',
  italic: 'normal',
  underline: 'none',
};

export const H4 = Template.bind({});
H4.args = {
  typography: 'H4',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American',
  bold: 'normal',
  italic: 'normal',
  underline: 'none',
};

export const H5 = Template.bind({});
H5.args = {
  typography: 'H5',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American',
  bold: 'normal',
  italic: 'normal',
  underline: 'none',
};

export const H6 = Template.bind({});
H6.args = {
  typography: 'H6',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American',
  bold: 'normal',
  italic: 'normal',
  underline: 'none',
};

export const ButtonText = Template.bind({});
ButtonText.args = {
  typography: 'ButtonText',
  children: 'Button Text',
};

export const P = Template.bind({});
P.args = {
  typography: 'P',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American',
  bold: 'normal',
  italic: 'normal',
  underline: 'none',
};
