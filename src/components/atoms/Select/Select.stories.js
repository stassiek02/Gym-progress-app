import React from 'react';
import { storiesOf } from '@storybook/react';
import  Select  from './Select';

storiesOf('Atoms/Select', module).add('Secondary', () => (
  <Select name="Squat" sets="5" reps="10" >
    <option>asd</option>
    <option>asd</option>
  </Select>
));
