import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, withKnobs } from '@storybook/addon-knobs';
import Card from './Card';

storiesOf('Molecules/Card', module).add('Normal', () => <Card />);
