import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';
import App from './';

test('renders title for page', () => {
  render(
    <ThemeProvider theme={theme}>
      <MockedProvider addTypename={false}>
        <App />
      </MockedProvider>
    </ThemeProvider>
  );

  const titleElement = screen.getByText(/Chuck Norris Facts API/i);
  expect(titleElement).toBeInTheDocument();
});