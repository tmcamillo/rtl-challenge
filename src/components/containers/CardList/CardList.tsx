import Card from '../Card/Card';
import { IBundelItem } from '../../../utils/data/bundle-interface';
import { getImageType } from 'utils/helpers';

export interface CardListProps {
  listNews: IBundelItem[];
  orientation?: 'column' | 'row';
}

function CardsList(props: CardListProps): JSX.Element {
  const { listNews, orientation } = props;

  if (listNews.length === 0) {
    return <></>;
  }

  return (
    <ul className={`cardlist ${orientation ? `cardlist--${orientation}` : `cardlist--column`}`}>
      {listNews.map((item: IBundelItem) => {
        return (
          <li
            key={item.id}
            className={orientation ? `cardlist__item--${orientation}` : `cardlist__item--column`}
          >
            <Card
              top={item.chapeau}
              title={item.titel}
              description={item.lead}
              src={getImageType(item.afbeelding.crops, 'artikel_top')}
              alt={item.titel}
              link={item.urlAlias}
              linkText='read more'
              arialabel={`Read more about ${item.titel}`}
              orientation={orientation ? orientation : 'column'}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CardsList;
