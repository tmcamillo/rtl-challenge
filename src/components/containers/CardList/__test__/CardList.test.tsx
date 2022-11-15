import { render, screen } from '@testing-library/react';
import { NewsContentProvider, NewsContext } from 'context/NewsContext';
import CardList from '../CardList';
import newMock from '../../../../utils/data/bundle-api.json';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/globalStyles';

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
      <ThemeProvider theme={theme}>
        <NewsContentProvider>
          <NewsContext.Provider value={mock}>
            <CardList />
          </NewsContext.Provider>
        </NewsContentProvider>
      </ThemeProvider>
    );

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
  });

  it('should not render list when its is an empty list', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewsContentProvider>
          <NewsContext.Provider value={mockEmptyList}>
            <CardList />
          </NewsContext.Provider>
        </NewsContentProvider>
      </ThemeProvider>
    );
    const list = screen.queryByRole('list');
    expect(list).not.toBeInTheDocument();
  });

  it('should render list of cards with the correct amount and no flex-direction for a column orientation', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewsContentProvider>
          <NewsContext.Provider value={mock}>
            <CardList orientation='column' />
          </NewsContext.Provider>
        </NewsContentProvider>
      </ThemeProvider>
    );
    const cards = screen.getAllByTestId('card');
    const list = screen.getByRole('list');
    expect(cards.length).toBe(9);
    expect(list).not.toHaveStyle('flex-direction: column');
  });

  it('should render list of cards with the correct amount and flex-direction as row', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewsContentProvider>
          <NewsContext.Provider value={mock}>
            <CardList orientation='row' />
          </NewsContext.Provider>
        </NewsContentProvider>
      </ThemeProvider>
    );
    const cards = screen.getAllByTestId('card');
    const list = screen.getByRole('list');
    expect(cards.length).toBe(12);
    expect(list).toHaveStyle('flex-direction: row');
  });

  it('should render list as a column by default', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewsContentProvider>
          <NewsContext.Provider value={mock}>
            <CardList />
          </NewsContext.Provider>
        </NewsContentProvider>
      </ThemeProvider>
    );

    const list = screen.getByRole('list');
    expect(list).not.toHaveStyle('flex-direction: column');
  });
});
