import { NewsContext } from 'context/NewsContext';
import Heading from 'components/containers/Heading/Heading';
import CardsList from 'components/containers/CardList/CardList';
import { useContext, useEffect } from 'react';
import news from '../../utils/data/bundle-api.json';

function App(): JSX.Element {
  const { setNewsFull } = useContext(NewsContext);

  useEffect(() => {
    setNewsFull(news);
  }, []);

  return (
    <>
      <Heading />
      <main>
        <CardsList orientation='column' />
        <CardsList orientation='row' />
      </main>
    </>
  );
}

export default App;
