import { fireEvent, render, screen } from '@testing-library/react';
import { IBundleRoots } from 'utils/data/bundle-interface';
import { NewsContentProvider, NewsContext } from './NewsContext';

const newItemsMock: IBundleRoots = {
  bundelItems: [],
  title: 'newTitle',
  label: 'newLabel',
  description: 'newDescription',
  image: {
    imageUrl: 'newbanner.jpg',
    crops: [],
    type: 'newmedia'
  }
};

describe('Context funcionality', () => {
  it('should newsFull be empty by default', () => {
    render(
      <NewsContentProvider>
        <NewsContext.Consumer>{(value) => <h1>{value.newsFull.title}</h1>}</NewsContext.Consumer>
      </NewsContentProvider>
    );

    const title = screen.queryByRole('newTitle');
    expect(title).toBeFalsy();
  });

  it('should save new items by calling setNewsFull ', () => {
    render(
      <NewsContentProvider>
        <NewsContext.Consumer>
          {(value) => (
            <>
              <h1>{value.newsFull.title}</h1>
              <button onClick={() => value.setNewsFull(newItemsMock)}>call state</button>;
            </>
          )}
        </NewsContext.Consumer>
      </NewsContentProvider>
    );

    const title = screen.queryByRole('heading');
    const button = screen.getByRole('button', { name: /call state/i });
    fireEvent.click(button);
    expect(title).toBeTruthy();
    expect(title).toHaveTextContent('newTitle');
  });
});
