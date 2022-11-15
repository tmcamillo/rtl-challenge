import { render, screen } from '@testing-library/react';
import { NewsContentProvider, NewsContext } from 'context/NewsContext';
import CardList from '../CardList';
import newMock from '../../../../utils/data/bundle-api.json';

const mock = {
  newsFull: newMock,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNewsFull: () => {}
};

const mockEmptyList = {
  ...mock,
  newsFull: {
    ...newMock,
    bundelItems: []
  }
};

describe('CardList component', () => {
  it('should render a list', () => {
    render(
      <NewsContentProvider>
        <NewsContext.Provider value={mock}>
          <CardList />
        </NewsContext.Provider>
      </NewsContentProvider>
    );

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('should not render list when its is an empty list', () => {
    render(
      <NewsContentProvider>
        <NewsContext.Provider value={mockEmptyList}>
          <CardList />
        </NewsContext.Provider>
      </NewsContentProvider>
    );
    const list = screen.queryByRole('list');
    expect(list).not.toBeInTheDocument();
  });

  it('should render list with the correct amount of cards and class when props value as column', () => {
    render(
      <NewsContentProvider>
        <NewsContext.Provider value={mock}>
          <CardList orientation='column' />
        </NewsContext.Provider>
      </NewsContentProvider>
    );
    const cards = screen.getAllByTestId('card');
    const list = screen.getByRole('list');
    expect(cards.length).toBe(9);
    expect(list).toHaveClass('cardlist cardlist--column');
  });

  it('should render list with the correct amount of cards and class when props value as row', () => {
    render(
      <NewsContentProvider>
        <NewsContext.Provider value={mock}>
          <CardList orientation='row' />
        </NewsContext.Provider>
      </NewsContentProvider>
    );
    const cards = screen.getAllByTestId('card');
    const list = screen.getByRole('list');
    expect(cards.length).toBe(12);
    expect(list).toHaveClass('cardlist cardlist--row');
  });

  it('should render list class default when no props value passed down', () => {
    render(
      <NewsContentProvider>
        <NewsContext.Provider value={mock}>
          <CardList />
        </NewsContext.Provider>
      </NewsContentProvider>
    );

    const list = screen.getByRole('list');
    expect(list).toHaveClass('cardlist cardlist--column');
  });
});
