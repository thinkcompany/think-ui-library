import React from 'react';
import { text, select } from '@storybook/addon-knobs';

import Button from './Button';
import notes from './Button.md';

export const basic = () => (
  <Button type={select('Type', ['button', 'submit'])}>
    {text('Children', 'Button')}
  </Button>
);

export default {
  title: 'Components/Button',
  parameters: {
    notes
  }
};
