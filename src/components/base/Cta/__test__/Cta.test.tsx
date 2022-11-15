import { render, screen } from '@testing-library/react';
import Cta from '../Cta';

describe('Cta component', () => {
  it('should render cta element', () => {
    render(<Cta link='https://www.google.com/' text='Here’s an example1' />);
    const cta = screen.getByText(/here’s an example1/i);
    expect(cta).toBeInTheDocument();
  });

  it('should render cta element with defaul target attribute', () => {
    render(<Cta link='https://www.google.com/' text='Here’s an example2' />);
    const cta = screen.getByText(/here’s an example2/i);
    expect(cta).toHaveAttribute('target', '_blank');
  });

  it('should render cta element with target attribute mentioned', () => {
    render(<Cta link='https://www.google.com/' text='Here’s an example3' target='_top' />);
    const cta = screen.getByText(/here’s an example3/i);
    expect(cta).toHaveAttribute('target', '_top');
  });
});
