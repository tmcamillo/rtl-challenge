import '../../styles/main.scss';
import { NewsContentProvider } from 'context/NewsContext';
import Heading from 'components/containers/Heading/Heading';
import CardsList from 'components/containers/CardList/CardList';

function App(): JSX.Element {
  return (
    <NewsContentProvider>
      <Heading />
      <main>
        <CardsList orientation='column' />
        <CardsList orientation='row' />
      </main>
    </NewsContentProvider>
  );
}

export default App;
