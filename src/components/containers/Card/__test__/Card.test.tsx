import { render, screen } from '@testing-library/react';
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
    render(<Card {...props} />);
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
    render(<Card {...props} />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card card--column');
  });

  it('should display card with props orientation: row', () => {
    render(<Card {...propsWOrientation} />);
    const card = screen.getByTestId('card');
    expect(card).toHaveClass('card card--row');
  });

  it('should display link on card', () => {
    render(<Card {...propsWLink} />);
    const card = screen.getByTestId('card');
    const link = screen.getByText('Visit page');
    expect(link).toBeInTheDocument();
    expect(card).toContainElement(link);
  });
});
