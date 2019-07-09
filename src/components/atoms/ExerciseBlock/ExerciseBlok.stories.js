import React from 'react';
import { storiesOf } from '@storybook/react';
import { ExerciseBlock } from './ExerciseBlock';

storiesOf('Atoms/ExerciseBlock', module).add('Secondary', () => (
  <ExerciseBlock name="Squat" sets="5" reps="10" />
));
