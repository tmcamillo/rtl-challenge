import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/globalStyles';
import Cta from '../Cta';

describe('Cta component', () => {
  it('should render cta element', () => {
    render(
      <ThemeProvider theme={theme}>
        <Cta link='https://www.google.com/' text='Here’s an example1' />
      </ThemeProvider>
    );
    const cta = screen.getByText(/here’s an example1/i);
    expect(cta).toBeInTheDocument();
  });

  it('should render cta element with defaul target attribute', () => {
    render(
      <ThemeProvider theme={theme}>
        <Cta link='https://www.google.com/' text='Here’s an example2' />
      </ThemeProvider>
    );
    const cta = screen.getByText(/here’s an example2/i);
    expect(cta).toHaveAttribute('target', '_blank');
  });

  it('should render cta element with target attribute mentioned', () => {
    render(
      <ThemeProvider theme={theme}>
        <Cta link='https://www.google.com/' target='_top' text='Here’s an example3' />
      </ThemeProvider>
    );
    const cta = screen.getByText(/here’s an example3/i);
    expect(cta).toHaveAttribute('target', '_top');
  });
});
