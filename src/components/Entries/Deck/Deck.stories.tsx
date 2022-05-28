import { ComponentMeta } from '@storybook/react';
import React, { FC } from 'react';

import { Card } from './Deck';
import { fields } from "./DeckData"

export default {
  title: 'theme/Card',
  component: Card
} as ComponentMeta<FC>;

export const Default = () => {
  return <Card fields={fields} />
}