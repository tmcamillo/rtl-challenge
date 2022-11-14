import '../../../styles/main.scss';
import CardsList from '../CardList/CardList';
import news from '../../../utils/data/bundle-api.json';
import Heading from '../Heading/Heading';
import { getImageType } from 'utils/helpers';

function App(): JSX.Element {
  const NEWS_LIST_HERO = news.bundelItems.filter((_, index) => index > 2);
  const NEWS_LIST_COLUMN = news.bundelItems.filter((_, index) => index > 2 && index <= 8);
  const NEWS_LIST_ROW = news.bundelItems.filter((_, index) => index > 8);

  return (
    <>
      <Heading
        title={news.title}
        label={news.label}
        description={news.description}
        src={getImageType(news.image.crops, 'liggend_breed')}
      />
      <main>
        <CardsList listNews={NEWS_LIST_COLUMN} orientation='column' />
        <CardsList listNews={NEWS_LIST_ROW} orientation='row' />
      </main>
    </>
  );
}

export default App;
