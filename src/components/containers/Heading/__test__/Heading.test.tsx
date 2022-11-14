import { render, screen } from '@testing-library/react';
import Heading from '../Heading';

describe('Heading', () => {
  it('should render element with same text passed into title prop', () => {
    render(
      <Heading title='Title Here' label='somelabel' description='someDescription' src='img.jpg' />
    );
    const h1Element = screen.getByRole('heading');
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent('Title Here');
  });
});
