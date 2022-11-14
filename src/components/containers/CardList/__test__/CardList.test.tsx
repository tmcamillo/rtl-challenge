import { render, screen } from '@testing-library/react';
import CardList, { CardListProps } from '../CardList';
import news from '../../../../utils/data/bundle-api.json';

const props: CardListProps = {
  listNews: news.bundelItems
};

const propsEmptyList: CardListProps = {
  listNews: []
};

const propsWOrientation: CardListProps = {
  ...props,
  orientation: 'row'
};

describe('CardList component', () => {
  it('should render list', () => {
    render(<CardList {...props} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('should not render list when its is an empty list', () => {
    render(<CardList {...propsEmptyList} />);
    const list = screen.queryByRole('list');
    expect(list).not.toBeInTheDocument();
  });

  it('should render list with the correct amount of cards', () => {
    render(<CardList {...props} />);
    const cards = screen.getAllByTestId('card');
    expect(cards.length).toBe(21);
  });

  it('should display list with default orientation: column', () => {
    render(<CardList {...props} />);
    const list = screen.getByRole('list');
    expect(list).toHaveClass('cardlist cardlist--column');
  });

  it('should display list with props orientation: row', () => {
    render(<CardList {...propsWOrientation} />);
    const list = screen.getByRole('list');
    expect(list).toHaveClass('cardlist cardlist--row');
  });
});
