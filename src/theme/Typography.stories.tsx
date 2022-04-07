import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { FC, useEffect, useState } from 'react';

import * as Typography from './Typography'

type TypographyStoryProps = {
  typography: keyof typeof Typography
}

export default {
  title: "theme/Typography",
  argTypes: {
    typography: { table: { disable: true } },
  }
} as ComponentMeta<FC>;

const Template: ComponentStory<FC<TypographyStoryProps>> = ({ children, typography }) => {
  const Component = Typography[typography]
  return (
    <Component>{children}</Component>
  )
};

export const TitleLarge = Template.bind({});
TitleLarge.args = {
  typography: 'TitleLarge',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American'
};

export const Title = Template.bind({});
Title.args = {
  typography: 'Title',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American'
};

export const TitleSmall = Template.bind({});
TitleSmall.args = {
  typography: 'TitleSmall',
  children: 'Democrats are fighting for a better, fairer, and brighter future for every American'
};