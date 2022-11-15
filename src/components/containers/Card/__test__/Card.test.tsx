import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/globalStyles';
import Card, { CardProps } from '../Card';

const props: CardProps = {
  top: 'Topline',
  title: 'Title',
  description: 'Description',
  src: 'some.jpg',
  alt: 'Alt'
};

const propsWLink: CardProps = {
  ...props,
  link: 'somePaht',
  linkText: 'Visit page'
};

const propsWOrientation: CardProps = {
  ...props,
  orientation: 'row'
};

describe('Card component', () => {
  it('should render card element', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );
    const card = screen.getByTestId('card');
    const top = screen.getByText('Topline');
    const title = screen.getByText('Title');
    const description = screen.getByText('Description');
    const image = screen.getByAltText(/Alt/i);
    expect(card).toBeInTheDocument();
    expect(card).toContainElement(top);
    expect(card).toContainElement(title);
    expect(card).toContainElement(description);
    expect(card).toContainElement(image);
  });

  it('should display card with default orientation: column', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle('flex-direction: column');
  });

  it('should display card with props orientation: row', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card {...propsWOrientation} />
      </ThemeProvider>
    );
    const card = screen.getByTestId('card');
    expect(card).toHaveStyle('flex-direction: row');
  });

  it('should display link on card', () => {
    render(
      <ThemeProvider theme={theme}>
        <Card {...propsWLink} />
      </ThemeProvider>
    );
    const card = screen.getByTestId('card');
    const link = screen.getByText('Visit page');
    expect(link).toBeInTheDocument();
    expect(card).toContainElement(link);
  });
});
