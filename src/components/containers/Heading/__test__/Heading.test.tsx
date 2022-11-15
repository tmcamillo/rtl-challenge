import { render, screen } from '@testing-library/react';
import { NewsContentProvider, NewsContext } from 'context/NewsContext';
import Heading from '../Heading';
import mock from '../../../../utils/data/bundle-api.json';
import { theme } from 'styles/globalStyles';
import { ThemeProvider } from 'styled-components';

const newMock = {
  newsFull: mock,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setNewsFull: () => {}
};

describe('Heading', () => {
  it('should render element with same text passed into title prop', () => {
    render(
      <ThemeProvider theme={theme}>
        <NewsContentProvider>
          <NewsContext.Provider value={newMock}>
            <Heading />
          </NewsContext.Provider>
        </NewsContentProvider>
      </ThemeProvider>
    );
    const h1Element = screen.getByRole('heading');
    expect(h1Element).toBeInTheDocument();
    expect(h1Element).toHaveTextContent('De uitschieters van 2018');
  });
});
