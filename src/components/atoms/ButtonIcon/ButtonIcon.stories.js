import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import graphIcon from 'assets/icons/graph.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';

import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.primary};
`;

storiesOf('Atoms/ButtonIcon', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('Logout', () => <ButtonIcon icon={logoutIcon} active />)
  .add('Pen', () => <ButtonIcon icon={penIcon} />)
  .add('Graph', () => <ButtonIcon icon={graphIcon} />);
