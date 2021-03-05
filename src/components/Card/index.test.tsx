import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import Card from './';

test('renders without crashing', () => {
  render(
    <ThemeProvider theme={theme}>
      <Card title={'Chuck Norris'} onClick={() => {}}/>
    </ThemeProvider>
  );

  const titleElement = screen.getByText(/Chuck Norris/i);
  expect(titleElement).toBeInTheDocument();
});